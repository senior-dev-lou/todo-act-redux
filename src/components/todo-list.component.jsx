import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Input } from '@mui/material';

import Todo from './todo.component';
import { selectTodoList } from '../redux/todo/todo.selectors';
import { selectDialogShow } from '../redux/todo/todo.selectors';
import { toggleAddTodoDialog, addTodo } from '../redux/todo/todo.actions';


const TodoList = () => {
  const [getTodoText, setTodoText] = useState('');
  const dialogShow = useSelector(selectDialogShow);
  const todoList = useSelector(selectTodoList);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (getTodoText.length <= 0) return;
    dispatch(addTodo(getTodoText));
    dispatch(toggleAddTodoDialog());
  }

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  return (<>
    <Box sx={{ flexGrow: 1, maxWidth: 500 }} className="mx-auto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="flex items-center justify-between shadow px-3 mt-8 bg-sky-500 mb-1">
            <Typography className='my-4 text-white' variant="h6" component="div">
              TODO LIST
            </Typography>
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(toggleAddTodoDialog())}>
              <AddCircleIcon className='text-white' />
            </IconButton>
          </div>
          <List dense={false}>
            {
              todoList.map((item) => (
                <Todo key={item.id} todoItem={item} />
              ))
            }
          </List>
        </Grid>
      </Grid>
    </Box>

    <Dialog open={dialogShow} fullWidth onClose={() => dispatch(toggleAddTodoDialog())}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
        <Input
          autoFocus
          margin="dense"
          id="name"
          label="Your Text"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(toggleAddTodoDialog())} >Cancel</Button>
        <Button onClick={handleAddTodo} >Add</Button>
      </DialogActions>
    </Dialog>
  </>

  );
}

export default TodoList;