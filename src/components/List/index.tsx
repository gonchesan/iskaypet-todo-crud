import React from 'react';

import styles from './styles.module.css';

import ListItem from '@/components/ListItem';
import type { RawTask } from '@/types/tasks.types';
import EmptyState from '../EmptyState';

const List: React.FC<{ data: RawTask[] }> = ({ data }) => {
  if (!data.length)
    return (
      <EmptyState
        description='No tienes tareas asignadas. Vuelve más tarde.'
        title='No hay tareas'
        icon='no_tasks'
      />
    );

  return (
    <div className={styles.list}>
      {data.map((todo, index) => (
        <ListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default List;
