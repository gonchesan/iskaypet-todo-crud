import { useHorizontalDragScroll } from '@/hooks/useHorizontalDragScroll.ts';
import styles from './styles.module.css';

const TABS = [
  { label: 'Mis datos', route: '' },
  { label: 'Mis tareas', route: '' },
  { label: 'Mis devoluciones', route: '' },
  { label: 'Mis comunicaciones', route: '' },
  { label: 'Mis mejores amigos', route: '' },
];

const Navbar = () => {
  const navRef = useHorizontalDragScroll<HTMLDivElement>();

  return (
    <nav className={styles.navbar} ref={navRef}>
      <ul className={styles.navbar__list}>
        {TABS.map((tab, index) => (
          <li
            key={index}
            className={
              index === 0 ? styles['navbar__item--active'] : styles.navbar__item
            }
          >
            <button className={styles.navbar__link}>{tab.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
