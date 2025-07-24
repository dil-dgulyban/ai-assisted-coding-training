import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { TodoModal } from '../TodoModal/TodoModal';

export const CreateTodoButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          data-testid="create-todo-button"
        >
          Add Todo
        </Button>
      </Box>

      <TodoModal isOpen={isModalOpen} onClose={handleCloseModal} mode="create" />
    </>
  );
};
