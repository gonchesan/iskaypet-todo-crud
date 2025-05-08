import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function useLocalStorage<T>(
  key: string,
  defaultValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue) as T;
      }

      return typeof defaultValue === 'function'
        ? (defaultValue as () => T)()
        : defaultValue;
    } catch (error) {
      console.log(error);
      return typeof defaultValue === 'function'
        ? (defaultValue as () => T)()
        : defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
