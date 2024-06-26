import { useMatch } from 'react-router-dom';

import styles from './HooksPage.module.scss';

function UseMatch() {
  const match = useMatch('/hooks/:something');

  return (
    <div className={styles.useMatch}>
      <h3>useMatch</h3>
      <div className={styles.content}>
        <p>is match '/hooks/:something': &nbsp; {match ? 'match' : 'no match'}</p>
      </div>
    </div>
  );
}

export default UseMatch;
