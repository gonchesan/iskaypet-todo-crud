import List from '@/components/List';
import { useModal } from '@/context/ModalContext';

import React, { useRef } from 'react';
import styles from './styles.module.css';

import TaskForm from '@/components/TaskForm';
import { useTasks } from '@/context/TaskContext';
import Skeleton from '@/components/Skeleton';

const TasksView: React.FC = () => {
  const { userTasks, isLoading, addTask } = useTasks();

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
    <>
      <List data={userTasks} />
      <button className={styles.btn__primary} onClick={handleOpen}>
        Añadir tarea
      </button>
    </>
  );
};

export default TasksView;
