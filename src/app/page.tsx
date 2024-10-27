"use client"; // Ensure this is a Client Component

import { BlogProvider } from '../context/BlogContext';
import PostList from '../components/PostList';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <BlogProvider>
      <Navbar />
      <h1>My Blog</h1>
      <PostList />
    </BlogProvider>
  );
};

export default HomePage;
