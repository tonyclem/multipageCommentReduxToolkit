import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  console.log('what is postStatus', postsStatus);

  useEffect(() => {
    if (postsStatus === 'idle') {
      console.log('fetchPosts', dispatch(fetchPosts()));
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;

  if (postsStatus === 'loading') {
    content = <p>"Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => <PostsExcerpt post={post} />);
    console.log('what is content inside', content);
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }
  console.log('what is content', content);
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
