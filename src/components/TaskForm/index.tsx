import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

import styles from './styles.module.css';
import { useState, type ChangeEvent } from 'react';

const TaskForm = ({ formValuesRef }) => {
  const [newTask, setNewTask] = useState({
    title: { value: '', error: '' },
    description: { value: '', error: '' },
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = event;

    setNewTask((prevValue) => {
      formValuesRef.current = {
        ...formValuesRef.current,
        [target.name]: {
          value: target.value,
          error: '',
        },
      };

      return {
        ...prevValue,
        [target.name]: {
          value: target.value,
          error: '',
        },
      };
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
        isMandatory={false}
      />
      <TextArea
        name='description'
        onChange={(event) => handleChange(event)}
        value={newTask.description.value}
        label='Descripción'
        placeholder='Descripción'
        rows={5}
        isMandatory={false}
      />
    </div>
  );
};
export default TaskForm;
