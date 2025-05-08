import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';

function useSessionStorage<T>(
  key: string,
  defaultValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = sessionStorage.getItem(key);
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
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to sessionStorage', error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
