import React from 'react';
import styles from './styles.module.css';
import TrashIcon from '@/assets/trash.svg?react';
const ListItem = ({ todo, deleteTask }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__body}>
        <h5 className={styles.card__title}>{todo.title}</h5>
        <p className={styles.card__description}>
          {todo?.description
            ? todo?.description
            : 'No hay un descripción para esta tarea.'}
        </p>
      </div>
      <button
        className={styles.card__button}
        onClick={() => deleteTask(todo.id)}
      >
        <TrashIcon />
      </button>
    </article>
  );
};

export default ListItem;
