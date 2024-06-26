import { useSearchParams } from 'react-router-dom';

import styles from './HooksPage.module.scss';

function UseSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query_string = searchParams.toString();
  const a_getAll = searchParams.getAll('a');
  const a_get = searchParams.get('a');

  return (
    <div className={styles.useSearchParams}>
      <h3>useSearchParams</h3>
      <div className={styles.content}>
        <p>query string: {query_string}</p>
        <p>get a: {a_get}</p>
        <p>
          getAll a: [
          {a_getAll.map((item, index) => (
            <span key={index}>
              {index === 0 ? '' : ','}
              {item}
            </span>
          ))}
          ]
        </p>
        <div>
          <button className={styles.urlBtn} onClick={() => setSearchParams({ a: 'hello', b: 'hi' })}>
            url 1
          </button>
          <button className={styles.urlBtn} onClick={() => setSearchParams({ a: ['hello', 'hi'] })}>
            url 2
          </button>
          <button onClick={() => setSearchParams({})} className={styles.clearBtn}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseSearchParams;
