import React from 'react';
import WIPIcon from '@/assets/wip.svg?react';
import NoTasksIcon from '@/assets/no-tasks.svg?react';

import styles from './styles.module.css';

export type EmptyStateType = {
  description?: string;
  title?: string;
  icon?: 'wip' | 'no_tasks';
};

const EmptyState: React.FC<EmptyStateType> = ({
  title = 'Ejemplo de título',
  description = 'Ejemplo de descripción',
  icon = 'wip',
}) => {
  const iconMap = {
    wip: <WIPIcon />,
    no_tasks: <NoTasksIcon />,
  };

  return (
    <div className={styles['empty-card']}>
      {iconMap[icon]}
      <h3 className={styles['empty-card__title']}>{title}</h3>
      <p className={styles['empty-card__description']}>{description}</p>
    </div>
  );
};

export default EmptyState;
