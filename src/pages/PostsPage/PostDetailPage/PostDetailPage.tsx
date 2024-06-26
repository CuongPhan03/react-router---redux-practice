import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../redux/hook';
import { fetchPostInfo } from '../../../redux/slices/postSlice';

import type { DetailPost } from '../../../types/backend';

function PostDetailPage() {
  const params = useParams();

  const postInfo: DetailPost = useAppSelector((state) => state.post.postInfo);
  const loading: boolean = useAppSelector((state) => state.post.loading);
  const error: boolean = useAppSelector((state) => state.post.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const postId: number = params.postId ? +params.postId : 0;
    dispatch(fetchPostInfo(postId));
  }, []);

  if (loading) return <p>Loading...</p>;
  else if (error) return <Navigate to="/posts" />;
  else
    return (
      <div style={{ padding: '0 100px' }}>
        <h2>Title: {postInfo.title}</h2>
        <p>Author: {postInfo.userId}</p>
        <p>Content: {postInfo.body}</p>
      </div>
    );
}

export default PostDetailPage;
