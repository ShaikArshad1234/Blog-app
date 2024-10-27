"use client"; // Ensure this is a Client Component

import { createContext, useState, ReactNode, useContext } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type BlogContextType = {
  posts: Post[];
  addPost: (newPost: Post) => void;
};

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};
