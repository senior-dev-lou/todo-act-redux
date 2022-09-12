import { createSelector } from "reselect";

const selectTodo = (state) => state.todo;

export const selectTodoList = createSelector(
  [selectTodo],
  (todo) => todo.todoList
);

export const selectDialogShow = createSelector(
  [selectTodo],
  (todo) => todo.showDialog
);
