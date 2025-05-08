import React from 'react';

import styles from './styles.module.css';
import ListItem from '../ListItem';

// const List: React.FC<{data: []}> = () => {
const List = ({ data, deleteTask }) => {
  return (
    <div className={styles.list}>
      {data.map((todo, index) => (
        <ListItem todo={todo} key={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default List;
