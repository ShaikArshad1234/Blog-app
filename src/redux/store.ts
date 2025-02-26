// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';

const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
});

export default store;
