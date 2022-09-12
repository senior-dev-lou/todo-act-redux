import { TodoActionTypes } from "./todo.types";

export const toggleAddTodoDialog = () => ({
  type: TodoActionTypes.TOGGLE_ADD_TODO_DIALOG,
});

export const addTodo = (todo) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: id,
});

export const editTodo = (id) => ({
  type: TodoActionTypes.EDIT_TODO,
  payload: id,
});

export const updateTodo = (data) => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload: data,
});

export const cancelTodoEdit = (id) => ({
  type: TodoActionTypes.CANCEL_TODO_EDIT,
  payload: id,
});

export const toggleCompleteTodo = (id) => ({
  type: TodoActionTypes.TOGGLE_COMPLETE_TODO,
  payload: id,
});
