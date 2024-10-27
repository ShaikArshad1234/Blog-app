"use client"; // Ensure this is a Client Component

import { useBlogContext } from '../../context/BlogContext';
import { useRouter } from 'next/router';

const PostDetails = () => {
  const { posts } = useBlogContext();
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default PostDetails;
