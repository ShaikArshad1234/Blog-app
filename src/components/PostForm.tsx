"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

const PostForm = () => {
  const { addPost } = useBlogContext();
  const [newPost, setNewPost] = useState({ id: 0, title: '', content: '', author: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost({ ...newPost, id: Date.now() });
    setNewPost({ id: 0, title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
