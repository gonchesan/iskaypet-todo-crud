import React from 'react';

import styles from './styles.module.css';

const Layout: React.FC<{
  title?: string;
  children?: React.ReactNode;
}> = ({ title = 'Default title', children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Layout;
