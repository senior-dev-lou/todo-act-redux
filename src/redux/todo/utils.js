import { v4 as uuidv4 } from "uuid";

export const addToDo = (todoList, todoToAdd) => {
  return [
    ...todoList,
    { id: uuidv4(), todo: todoToAdd, completed: false, isEditing: false },
  ];
};

export const removeToDo = (todoList, id) => {
  return todoList.filter((item) => item.id !== id);
};

export const updateTodo = (todoList, data) => {
  return todoList.map((item) => {
    if (data.id === item.id) {
      item.todo = data.ref.current.value;
      item.isEditing = false;
    }
    return item;
  });
};

export const cancelTodoEdit = (todoList, id) => {
  return todoList.map((item) => {
    if (item.id === id) {
      item.isEditing = false;
    }
    return item;
  });
};

export const toggleCompleteTodo = (todoList, id) => {
  return todoList.map((item) => {
    if (item.id === id) {
      item.completed = item.completed ? false : true;
    }
    return item;
  });
};
export const editTodo = (todoList, id) => {
  return todoList.map((item) => {
    if (item.id === id) {
      item.isEditing = true;
    }
    return item;
  });
};
