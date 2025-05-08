import { getTasks } from '@/services/tasks';
import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import type { Task } from '@/types/Task';

function useTasks() {
  const [data, setData] = useLocalStorage<Task[]>('user-tasks', []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getInitialTasks = async () => {
    try {
      setIsLoading(true);
      const result = await getTasks();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = (id: number) => {
    const newArrTask = data.filter((task) => id !== task.id) as Task[];

    setData(newArrTask);
  };

  // edit
  // add
  function generateRandomId() {
    return Number(
      Date.now().toString(36) + Math.random().toString(36).substring(2, 8),
    );
  }
  const addTask = (newTask: {
    title: { value: string; error: string };
    description: { value: string; error: string };
  }) => {
    const formattedTask: Task = {
      id: generateRandomId(),
      title: newTask.title.value,
      description: newTask.description.value,
      userId: 101,
      completed: false,
    };
    //newTask = {title: {value: '',description: {value}}}
    setData((prevValues) => [...prevValues, formattedTask]);
  };

  useEffect(() => {
    getInitialTasks();
  }, []);

  return {
    userTasks: data,
    isLoading,
    error,
    deleteTask,
    addTask,
  };
}

export default useTasks;
