import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { getTasks } from '@/services/tasks';
import useLocalStorage from '@/hooks/useLocalStorage';

import type { RawTask, TaskContextType } from '@/types/Task';
import { generateRandomId } from '@/utils/generateId';

const TaskContext = createContext<TaskContextType | null>(null);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a ModalProvider');
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useLocalStorage<RawTask[]>('user-tasks', []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | unknown>(null);

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
    getInitialTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        userTasks: data,
        isLoading,
        error,
        deleteTask,
        addTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
