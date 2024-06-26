import { useNavigate } from 'react-router-dom';

import styles from './HooksPage.module.scss';

function UseNavigate() {
  const navigate = useNavigate();

  return (
    <div className={styles.useNavigate}>
      <h3>useNavigate</h3>
      <div className={styles.content}>
        <button className={styles.urlBtn} onClick={() => navigate('/hooks/xyz')}>
          url 1
        </button>
        <button className={styles.urlBtn} onClick={() => navigate('/hooks?c=true')}>
          url 1
        </button>
        <button className={styles.clearBtn} onClick={() => navigate('/hooks')}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default UseNavigate;
