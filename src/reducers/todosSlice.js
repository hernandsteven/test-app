import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodos } from '../api/todosAPI';

const initialState = {
  todosFetched: false,
  todos: null,
};

export const fetchTodos = createAsyncThunk('todos/getTodos', async () => {
  const data = await getTodos();
  return data;
});

export const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.todos = [
        { id: state.todos.length + 1, title: action.payload, completed: false },
        ...state.todos,
      ];
    },
  },

  /* async data reducers */
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.todosFetched = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todosFetched = true;
        state.todos = action.payload;
      });
  },
});

/* Exporting actions */
export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
