import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hook';
import Header from './Header/Header';

import style from './Layout.module.scss';

function Layout() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={`${style.layout} ${style[theme]}`}>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
