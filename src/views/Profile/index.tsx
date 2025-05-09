import Input from '@/components/Input';
import React from 'react';

import styles from './styles.module.css';

const ProfileView: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <article className={styles.card}>
      <form className={styles.card__form} onSubmit={(e) => handleSubmit(e)}>
        <Input label='Nombre' placeholder='Nombre' />
        <Input label='Email' placeholder='Nombre' />
        <Input label='Teléfono' placeholder='Teléfono' />

        <button className={styles.card__button}>Guardar</button>
      </form>
    </article>
  );
};

export default ProfileView;
