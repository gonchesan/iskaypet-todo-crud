import type { FormField } from './form.types';

export type Task = {
  id?: number;
  title: string | FormField;
  description: string | FormField;
  userId?: number;
  completed?: boolean;
};

export type RawTask = {
  id?: number;
  title: string;
  description: string;
  userId?: number;
  completed?: boolean;
};

export type TaskContextType = {
  userTasks: RawTask[];
  isLoading: boolean;
  error: null | unknown;
  deleteTask: (id: number) => void;
  addTask: (addTask: Pick<RawTask, 'title' | 'description'>) => void;
  editTask: (editedTask: RawTask) => void;
  currentItems: RawTask[];
  setCurrentItems: React.Dispatch<React.SetStateAction<RawTask[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  LIMIT: number;
};
