import React from 'react';
import { List, Paper, Typography, Box, Alert } from '@mui/material';
import { useTodo } from '../../hooks/useTodo';
import { TodoItem } from './TodoItem';
import type { Todo } from '../../types/Todo';

interface TodoListProps {
  onEditTodo: (todo: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ onEditTodo }) => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <Box sx={{ mt: 3 }}>
        <Alert severity="info" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">
            No todos yet. Add your first todo by clicking the "Add Todo" button!
          </Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <Paper
      sx={{
        mt: 3,
        borderRadius: 2,
        overflow: 'hidden',
      }}
      elevation={1}
    >
      <List disablePadding>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onEditClick={onEditTodo} />
        ))}
      </List>
    </Paper>
  );
};
