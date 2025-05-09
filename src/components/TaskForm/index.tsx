import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

import styles from './styles.module.css';
import { useEffect, useState, type ChangeEvent, type RefObject } from 'react';

import type { FormValues } from '@/types/form.types';
import type { Task } from '@/types/tasks.types';
import { normalize } from '@/utils/form';

type TaskFormType = {
  formValuesRef: RefObject<Task | null>;
};

const TaskForm: React.FC<TaskFormType> = ({ formValuesRef }) => {
  const [newTask, setNewTask] = useState<FormValues>({
    title: { value: '', error: '' },
    description: { value: '', error: '' },
  });

  useEffect(() => {
    if (formValuesRef?.current) {
      const { title, description } = formValuesRef.current;
      setNewTask(() => {
        const updatedForm: FormValues = {
          title: normalize(title),
          description: normalize(description),
        };
        const validatedForm = validateFieldForm(updatedForm);

        return validatedForm;
      });
    }
  }, []);

  const validateFieldForm = (form: FormValues): FormValues => {
    const errors: Partial<FormValues> = {};

    if (!form.title.value.trim()) {
      errors.title = { ...form.title, error: 'Este campo es obligatorio' };
    }

    if (!form.description.value.trim()) {
      errors.description = {
        ...form.description,
        error: 'Este campo es obligatorio',
      };
    }

    return {
      ...form,
      ...errors,
    };
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setNewTask((prevValue) => {
      const updatedForm = {
        ...prevValue,
        [name]: {
          value,
          error: '',
        },
      };
      const validatedForm = validateFieldForm(updatedForm);

      formValuesRef.current = { ...formValuesRef?.current, ...validatedForm };

      return validatedForm;
    });
  };

  return (
    <div className={styles.form}>
      <Input
        value={newTask.title.value}
        name='title'
        onChange={(event) => handleChange(event)}
        label='Nombre'
        placeholder='Nombre'
        error={newTask.title.error}
      />
      <TextArea
        name='description'
        onChange={(event) => handleChange(event)}
        value={newTask.description.value}
        label='Descripción'
        placeholder='Descripción'
        rows={5}
        error={newTask.description.error}
      />
    </div>
  );
};
export default TaskForm;
