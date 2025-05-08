import List from '@/components/List';
import { useModal } from '@/context/ModalContext';
import useTasks from '@/hooks/useTasks';
import React, { useRef } from 'react';
import styles from './styles.module.css';

import TaskForm from '@/components/TaskForm';

//TODO Change Skeleton
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const TasksView: React.FC = () => {
  const { userTasks, isLoading, deleteTask, addTask } = useTasks();

  const formValuesRef = useRef(null);

  const { openModal } = useModal();

  const handleOpen = () => {
    openModal({
      title: 'Añadir tarea',
      children: <TaskForm formValuesRef={formValuesRef} />,
      onConfirm: () => {
        addTask(formValuesRef.current);
        //Clear value of the mutable object
        formValuesRef.current = null;
      },
      onCancel: () => {
        console.log('Cancelled!');
      },
    });
  };
  if (isLoading) return <Loading />;

  return (
    <>
      <List data={userTasks} deleteTask={deleteTask} />
      <button className={styles.btn__primary} onClick={handleOpen}>
        Añadir tarea
      </button>
    </>
  );
};

export default TasksView;
