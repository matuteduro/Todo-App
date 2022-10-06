import { configureStore } from '@reduxjs/toolkit';
import todoReduce from '../reducers/todoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReduce,
  },
});
