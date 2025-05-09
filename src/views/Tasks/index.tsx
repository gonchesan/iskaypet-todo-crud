import List from '@/components/List';

import React, { useRef } from 'react';
import styles from './styles.module.css';

import { useModal } from '@/hooks/useModal';
import { useTasks } from '@/hooks/useTasks';

import TaskForm from '@/components/TaskForm';
import Skeleton from '@/components/Skeleton';
import Paginator from '@/components/Paginator';

const TasksView: React.FC = () => {
  const { isLoading, addTask, currentItems } = useTasks();

  const formValuesRef = useRef<{
    title: { value: string; error: string };
    description: { value: string; error: string };
  } | null>(null);

  const { openModal } = useModal();

  const handleOpen = () => {
    openModal({
      title: 'Añadir tarea',
      children: <TaskForm formValuesRef={formValuesRef} />,
      onConfirm: ({ closeModal }) => {
        if (formValuesRef.current) {
          const { title, description } = formValuesRef.current;
          const formIsValid = !title.error && !description.error;
          if (formIsValid) {
            addTask({ title: title.value, description: description.value });
            //Clear value of the mutable object
            formValuesRef.current = null;
            closeModal();
          }
        }
      },
      onCancel: () => {
        formValuesRef.current = null;
      },
    });
  };
  if (isLoading)
    return Array(5)
      .fill('')
      .map((_, index) => <Skeleton key={index} />);

  return (
    <section className={styles.container}>
      <List data={currentItems} />
      <Paginator />
      <button className={styles.btn__primary} onClick={handleOpen}>
        Añadir tarea
      </button>
    </section>
  );
};

export default TasksView;
