import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { useTodo } from '../contexts/TodoContext';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock the TodoModal component
vi.mock('../components/TodoModal/TodoModal', () => ({
  TodoModal: ({ isOpen, mode, onClose }) => (
    isOpen ? (
      <div data-testid="mocked-modal">
        <div data-testid="modal-mode">{mode}</div>
        <button data-testid="modal-close" onClick={onClose}>Close</button>
      </div>
    ) : null
  )
}));

// Mock the useTodo hook
vi.mock('../contexts/TodoContext', () => ({
  useTodo: vi.fn(() => ({
    addTodo: vi.fn()
  }))
}));

describe('CreateTodoButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a button with correct text', () => {
    render(<CreateTodoButton />);
    
    const button = screen.getByTestId('create-todo-button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Add Todo');
  });

  it('initially renders with modal closed', () => {
    render(<CreateTodoButton />);
    
    // Check that the modal is not rendered initially
    expect(screen.queryByTestId('mocked-modal')).not.toBeInTheDocument();
  });

  it('opens modal when button is clicked', async () => {
    const user = userEvent.setup();
    render(<CreateTodoButton />);
    
    // Initially modal should be closed
    expect(screen.queryByTestId('mocked-modal')).not.toBeInTheDocument();
    
    // Click the button to open modal
    await user.click(screen.getByTestId('create-todo-button'));
    
    // After click, modal should be opened
    const modal = screen.getByTestId('mocked-modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getByTestId('modal-mode').textContent).toBe('create');
  });

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<CreateTodoButton />);
    
    // Open the modal first
    await user.click(screen.getByTestId('create-todo-button'));
    
    // Modal should be open
    expect(screen.getByTestId('mocked-modal')).toBeInTheDocument();
    
    // Click the close button
    await user.click(screen.getByTestId('modal-close'));
    
    // Modal should be closed
    expect(screen.queryByTestId('mocked-modal')).not.toBeInTheDocument();
  });
});