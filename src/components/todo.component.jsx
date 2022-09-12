import { useDispatch } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import EditTodo from './edit-todo.component';
import { toggleCompleteTodo, removeTodo, editTodo } from '../redux/todo/todo.actions';


const Todo = ({ todoItem }) => {
  const dispatch = useDispatch();

  const { id, todo, isEditing, completed } = todoItem;

  return <>
    <ListItem
      className={`shadow mb-2.5 py-4 ${completed ? 'bg-blue-50' : 'bg-white'}`}

      secondaryAction={

        !isEditing && <>
          <IconButton edge="end" aria-label="checkbox" onClick={() => dispatch(toggleCompleteTodo(id))}>
            <Checkbox size='small' checked={completed} />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTodo(id))}>
            <DeleteIcon fontSize='small' className='text-red-500' />
          </IconButton>
          <IconButton edge="end" aria-label="edit" color='primary' onClick={() => dispatch(editTodo(id))}>
            <EditIcon fontSize='small' />
          </IconButton>
        </>
      }
    >
      {
        !isEditing ? <ListItemText
          primary={todo}
        />
          :
          <EditTodo
            defaultValue={todo}
            id={id}
          />
      }

    </ListItem>
  </>
}

export default Todo;