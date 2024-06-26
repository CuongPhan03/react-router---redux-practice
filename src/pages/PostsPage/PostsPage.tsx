import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { fetchPostsByAuthor } from '../../redux/slices/postsSlice';

import FilterAuthor from '../../components/FilterAuthor/FilterAuthor';
import PostCard from '../../components/PostCard/PostCard';

import type { Post } from '../../types/backend';

import styles from './PostsPage.module.scss';

function PostsPage() {
  const [searchParams] = useSearchParams();
  const author: string = searchParams.get('author') ?? '0';

  const listPosts: Post[] = useAppSelector((state) => state.posts.listPosts);
  const loading: boolean = useAppSelector((state) => state.posts.loading);
  const error: boolean = useAppSelector((state) => state.posts.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsByAuthor(+author));
  }, [author]);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error</p>;
  else
    return (
      <>
        <FilterAuthor />
        <div className={styles.allPostsPage}>
          {listPosts.map((post, key) => (
            <div key={key}>
              <PostCard id={post.id} author={post.userId} title={post.title} />
            </div>
          ))}
        </div>
      </>
    );
}

export default PostsPage;
