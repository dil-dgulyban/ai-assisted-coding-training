import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from '../contexts/TodoContext';
import { TodoList } from '../components/TodoList/TodoList';
import { Todo } from '../types/Todo';
import { useTodo } from '../contexts/TodoContext';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock the useTodo hook
vi.mock('../contexts/TodoContext', () => ({
  useTodo: vi.fn()
}));

describe('TodoList Component', () => {
  const mockOnEditTodo = vi.fn();

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
  });

  it('renders empty state when no todos exist', () => {
    // Mock the hook to return empty todos array
    (useTodo as any).mockReturnValue({
      todos: []
    });

    render(<TodoList onEditTodo={mockOnEditTodo} />);
    
    // Check for empty state message
    expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();
  });

  it('renders todo items when todos exist', () => {
    // Mock data
    const mockTodos: Todo[] = [
      {
        id: '1',
        title: 'Test Todo 1',
        description: 'Test Description 1',
        completed: false,
        createdAt: new Date()
      },
      {
        id: '2',
        title: 'Test Todo 2',
        description: 'Test Description 2',
        completed: true,
        createdAt: new Date()
      }
    ];

    // Mock the hook to return todos
    (useTodo as any).mockReturnValue({
      todos: mockTodos,
      toggleTodoCompletion: vi.fn(),
      deleteTodo: vi.fn()
    });

    render(<TodoList onEditTodo={mockOnEditTodo} />);

    // Check that both todos are rendered
    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });
});