"use client"; // Ensure this is a Client Component

import { BlogProvider } from '../context/BlogContext';
import PostForm from '../components/PostForm';
import Navbar from '../components/Navbar';

const AddPostPage = () => {
  return (
    <BlogProvider>
      <Navbar />
      <h1>Add a New Post</h1>
      <PostForm />
    </BlogProvider>
  );
};

export default AddPostPage;
