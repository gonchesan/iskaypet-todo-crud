import { useHorizontalDragScroll } from '@/hooks/useHorizontalDragScroll.ts';
import styles from './styles.module.css';
import { ROUTES } from '@/constants/routes';
import { Link } from 'wouter';
import { useBrowserLocation } from 'wouter/use-browser-location';

const Navbar = () => {
  const navRef = useHorizontalDragScroll<HTMLDivElement>();
  const [route] = useBrowserLocation();

  const isActive = (path: string) => {
    return path === route ? true : false;
  };

  return (
    <nav className={styles.navbar} ref={navRef}>
      <ul className={styles.navbar__list}>
        {ROUTES.map((tab, index) => (
          <li
            key={index}
            className={
              isActive(tab.path)
                ? styles['navbar__item--active']
                : styles.navbar__item
            }
          >
            <Link to={tab.path} asChild={true}>
              <button className={styles.navbar__link}>{tab.label}</button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
