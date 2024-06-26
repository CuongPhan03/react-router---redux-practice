import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';

import styles from './PostCard.module.scss';

interface Props {
  id: number;
  author: number;
  title: string;
}

function PostCard(props: Props) {
  const theme = useAppSelector((state) => state.theme.value);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${props.id}`);
  };

  return (
    <button className={`${styles.postCard} ${styles[theme]}`} onClick={handleClick}>
      <h3>Title: {props.title}</h3>
      <p>Author: {props.author}</p>
    </button>
  );
}

export default PostCard;
