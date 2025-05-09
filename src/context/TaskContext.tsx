import { createContext, useEffect, useState, type ReactNode } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import { getTasks } from '@/services/tasks.service';

import type { RawTask, TaskContextType } from '@/types/tasks.types';
import { generateRandomId } from '@/utils/generateId';

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useLocalStorage<RawTask[]>('user-tasks', []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);
  const [currentItems, setCurrentItems] = useState<RawTask[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const LIMIT = 5;

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
    const newArrTask = data.filter((task) => id !== task.id) as RawTask[];
    setData(newArrTask);
  };

  const addTask = (newTask: Pick<RawTask, 'description' | 'title'>) => {
    const formattedTask: RawTask = {
      id: generateRandomId(),
      title: newTask.title,
      description: newTask.description,
      userId: 101,
      completed: false,
    };

    setData((prevValues) => [...prevValues, formattedTask]);
  };

  const editTask = (editedTask: RawTask) => {
    const { id } = editedTask;
    const newArrFormattedTask = data.map((task) => {
      if (id !== task.id) return task;
      return editedTask;
    }) as RawTask[];

    setData(newArrFormattedTask);
  };

  useEffect(() => {
    if (!data.length) {
      getInitialTasks();
    }
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * LIMIT;
    const endIndex = startIndex + LIMIT;
    setCurrentItems(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  return (
    <TaskContext.Provider
      value={{
        userTasks: data,
        isLoading,
        error,
        deleteTask,
        addTask,
        editTask,
        currentItems,
        setCurrentItems,
        currentPage,
        setCurrentPage,
        LIMIT,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
