import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Save } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { updateTodo, cancelTodoEdit } from '../redux/todo/todo.actions';

const EditTodo = ({ defaultValue, id }) => {
  const dispatch = useDispatch();

  const editedTodo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTodo.current.value.length <= 0) return;
    dispatch(updateTodo({ id: id, ref: editedTodo }));
  }

  return <form className='flex w-full p-0' onSubmit={handleSubmit}>
    <Input
      style={{ width: "100%" }}
      defaultValue={defaultValue}
      inputRef={editedTodo}
    />
    <IconButton
      type="submit"
      color="primary"
      aria-label="Add"
    >
      <Save fontSize="small" />
    </IconButton>
    <IconButton
      className='text-red-500'
      aria-label="cancel"
      onClick={() => dispatch(cancelTodoEdit(id))}
    >
      <HighlightOffIcon fontSize="small" />
    </IconButton>
  </form>
}
export default EditTodo;