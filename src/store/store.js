// store.js
import { createStore } from 'redux';

// Define initial state
const initialState = {
  todos: []
};

// Define action types
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Define action creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const editTodo = (id, updatedText) => ({
  type: EDIT_TODO,
  payload: { id, updatedText }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.updatedText }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;