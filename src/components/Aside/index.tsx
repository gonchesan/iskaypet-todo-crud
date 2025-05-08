import styles from './styles.module.css';

import MenuIcon from '@/assets/menu.svg?react';
import SearchIcon from '@/assets/search.svg?react';
import Logo from '@/assets/logo.svg?react';
import UserIcon from '@/assets/user.svg?react';
import ChartIcon from '@/assets/chart.svg?react';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <MenuIcon />
        <SearchIcon />
        <Logo />
        <UserIcon />
        <ChartIcon />
      </div>
    </aside>
  );
};

export default Aside;
