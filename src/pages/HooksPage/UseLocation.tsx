import { useLocation } from 'react-router-dom';

import styles from './HooksPage.module.scss';

function UseLocation() {
  const location = useLocation();

  return (
    <div className={styles.useLocation}>
      <h3>useLocation</h3>
      <div className={styles.content}>
        <p>path: {location.pathname}</p>
        <p>query string: {location.search}</p>
      </div>
    </div>
  );
}

export default UseLocation;
