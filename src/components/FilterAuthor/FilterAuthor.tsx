import { useSearchParams } from 'react-router-dom';

import styles from './FilterAuthor.module.scss';

interface FilterBtnProps {
  author: number;
  isActive: boolean;
  onFilter: (value: number) => void;
}
interface ClearBtnProps {
  onClear: () => void;
}

function FilterButton(props: FilterBtnProps) {
  return (
    <button
      className={styles.filterBtn + (props.isActive ? ' ' + styles.active : '')}
      onClick={() => props.onFilter(props.author)}
    >
      {props.author}
    </button>
  );
}
function ClearButton(props: ClearBtnProps) {
  return (
    <button className={styles.clearBtn} onClick={props.onClear}>
      Clear
    </button>
  );
}

function FilterAuthor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currAuthor: string = searchParams.get('author') ?? '0';

  const handleFilter = (author: number) => {
    setSearchParams({ author: `${author}` });
  };
  const handleClear = () => {
    setSearchParams({ author: '0' });
  };

  const authors: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.filterAuthor}>
      <h3>Author: </h3>
      <div className={styles.buttons}>
        {authors.map((author, index) => (
          <div key={index}>
            <FilterButton author={author} isActive={+currAuthor === author} onFilter={handleFilter} />
          </div>
        ))}
      </div>
      <ClearButton onClear={handleClear} />
    </div>
  );
}

export default FilterAuthor;
