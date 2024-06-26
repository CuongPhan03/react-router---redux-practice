import { Link, useParams } from 'react-router-dom';

import styles from './HooksPage.module.scss';

function UseParams() {
  const { slug, id } = useParams();

  return (
    <div className={styles.useParams}>
      <h3>useParams</h3>
      <div className={styles.content}>
        <p>
          params: &nbsp; slug = {slug}, id = {id}{' '}
        </p>
        <div>
          <Link to="/hooks/abc">
            <button className={styles.urlBtn}>url 1</button>
          </Link>
          <Link to="/hooks/abc/1">
            <button className={styles.urlBtn}>url 2</button>
          </Link>
          <Link to="/hooks" className={styles.clearBtn}>
            Clear
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UseParams;
