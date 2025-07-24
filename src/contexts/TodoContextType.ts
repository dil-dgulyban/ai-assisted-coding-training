import type { Todo } from '../types/Todo';

export interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  editTodo: (id: string, updates: Partial<Todo>) => void;
  toggleTodoCompletion: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

import { createContext } from 'react';
