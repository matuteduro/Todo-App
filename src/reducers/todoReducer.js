import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('TodoList');
  if (localTodoList) {
    return JSON.paarse(localTodoList);
  }
  window.localStorage.setItem('todolist', JSON.stringify([]));
  return [];
};
const initialValue = {
  todoList: getInitialTodo(),
};

export const todoReducer = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
  },
});

export const { addTodo } = todoReducer.actions;
export default todoReducer.reducer;
