import { v4 as uuidv4 } from "uuid";

import { TodoActionTypes } from "./todo.types";
import {
  addToDo,
  removeToDo,
  editTodo,
  updateTodo,
  cancelTodoEdit,
  toggleCompleteTodo,
} from "./utils";

const INITIAL_STATE = {
  showDialog: false,
  todoList: [
    { id: uuidv4(), todo: "A simple task", completed: true, isEditing: false },
    {
      id: uuidv4(),
      todo: "Another simple task",
      completed: false,
      isEditing: false,
    },
  ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.TOGGLE_ADD_TODO_DIALOG:
      return {
        ...state,
        showDialog: !state.showDialog,
      };
    case TodoActionTypes.ADD_TODO:
      return {
        ...state,
        todoList: addToDo(state.todoList, action.payload),
      };
    case TodoActionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: removeToDo(state.todoList, action.payload),
      };
    case TodoActionTypes.TOGGLE_COMPLETE_TODO:
      return {
        ...state,
        todoList: toggleCompleteTodo(state.todoList, action.payload),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        ...state,
        todoList: editTodo(state.todoList, action.payload),
      };
    case TodoActionTypes.UPDATE_TODO:
      return {
        ...state,
        todoList: updateTodo(state.todoList, action.payload),
      };
    case TodoActionTypes.CANCEL_TODO_EDIT:
      return {
        ...state,
        todoList: cancelTodoEdit(state.todoList, action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
