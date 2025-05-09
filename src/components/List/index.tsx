import React from 'react';

import styles from './styles.module.css';

import ListItem from '@/components/ListItem';
import type { RawTask } from '@/types/Task';

const List: React.FC<{ data: RawTask[] }> = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map((todo, index) => (
        <ListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default List;
