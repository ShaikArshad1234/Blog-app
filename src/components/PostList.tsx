"use client"; // Ensure this is a Client Component

import { useBlogContext } from '../context/BlogContext';
import Link from 'next/link';

const PostList = () => {
  const { posts } = useBlogContext();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
