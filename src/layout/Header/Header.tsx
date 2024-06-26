import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

import ThemeButton from '../../components/ThemeButton/ThemeButton';

import styles from './Header.module.scss';

function Header() {
  const theme = useAppSelector((state) => state.theme.value);

  const routes = [
    { path: '/', title: 'Home' },
    { path: '/hooks', title: 'Hooks' },
    { path: '/posts', title: 'Posts' },
  ];

  return (
    <div className={`${styles.header} ${styles[theme]}`}>
      {routes.map((route, index) => (
        <NavLink
          to={route.path}
          key={index}
          className={(nav) => styles.link + (nav.isActive ? ' ' + styles.active : '')}
        >
          {route.title}
        </NavLink>
      ))}
      <div className={styles.themeBtn}>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Header;
