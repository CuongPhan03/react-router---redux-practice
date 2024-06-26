import UseParams from './UseParams';
import UseSearchParams from './UseSearchParams';
import UseLocation from './UseLocation';
import UseMatch from './UseMatch';
import UseNavigate from './UseNavigate';

import styles from './HooksPage.module.scss';

function HooksPage() {
  return (
    <div className={styles.hooksPage}>
      <UseParams />
      <UseSearchParams />
      <UseLocation />
      <UseMatch />
      <UseNavigate />
    </div>
  );
}

export default HooksPage;
