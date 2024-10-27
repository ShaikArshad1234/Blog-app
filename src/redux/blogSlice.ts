import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

interface BlogState {
  posts: Post[];
}

const initialState: BlogState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = blogSlice.actions;
export default blogSlice.reducer;
