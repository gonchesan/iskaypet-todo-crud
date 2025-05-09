import React, { useRef } from 'react';

import styles from './styles.module.css';
import TrashIcon from '@/assets/trash.svg?react';

import { isFormField } from '@/utils/form';
import { useModal } from '@/hooks/useModal';
import { useTasks } from '@/hooks/useTasks';

import TaskForm from '@/components/TaskForm';

import type { RawTask, Task } from '@/types/tasks.types';

const ListItem: React.FC<{ todo: RawTask }> = ({ todo }) => {
  const { openModal } = useModal();
  const { editTask, deleteTask } = useTasks();

  const formValuesRef = useRef<Task | null>(null);

  const handleModalToEdit = (todo: Task) => {
    formValuesRef.current = todo;

    openModal({
      title: 'Editar tarea',
      children: <TaskForm formValuesRef={formValuesRef} />,
      onConfirm: ({ closeModal }) => {
        const current = formValuesRef.current;
        if (!current) return;

        const { id, title, description, userId, completed } = current;

        const titleValue = isFormField(title) ? title.value : title;
        const descriptionValue = isFormField(description)
          ? description.value
          : description;

        const titleError = isFormField(title) ? title.error : undefined;
        const descriptionError = isFormField(description)
          ? description.error
          : undefined;

        const formHasErrors = !!(titleError || descriptionError);
        const formIsValid = !!(titleValue && descriptionValue);

        if (!formHasErrors && formIsValid) {
          const formattedTask: RawTask = {
            id,
            title: titleValue,
            description: descriptionValue,
            userId,
            completed,
          };

          editTask(formattedTask);
          formValuesRef.current = null;
          closeModal();
        }
      },
      onCancel: () => {
        formValuesRef.current = null;
      },
    });
  };
  const handleDeleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteTask(todo.id!);
  };

  return (
    <article className={styles.card} onClick={() => handleModalToEdit(todo)}>
      <div className={styles.card__body}>
        <h5 className={styles.card__title}>{todo.title}</h5>
        <p className={styles.card__description}>
          {todo?.description
            ? todo?.description
            : 'No hay un descripción para esta tarea.'}
        </p>
      </div>
      <button
        className={styles.card__button}
        onClick={(e) => handleDeleteTask(e)}
      >
        <TrashIcon />
      </button>
    </article>
  );
};

export default ListItem;
