import type { Todo } from '../types/Todo';

const STORAGE_KEY = 'todos';

/**
 * Validates if the given data is a valid array of Todo objects
 */
export const isValidTodos = (data: unknown): data is Todo[] => {
  if (!Array.isArray(data)) {
    return false;
  }

  return data.every((item: unknown) => {
    if (typeof item !== 'object' || item === null) {
      return false;
    }

    const todo = item as Record<string, unknown>;
    
    return (
      typeof todo.id === 'string' &&
      typeof todo.title === 'string' &&
      typeof todo.description === 'string' &&
      typeof todo.completed === 'boolean' &&
      (todo.createdAt instanceof Date || typeof todo.createdAt === 'string')
    );
  });
};

/**
 * Loads todos from sessionStorage
 * Returns empty array if no data, invalid data, or error occurs
 */
export const loadTodos = (): Todo[] => {
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    
    if (!isValidTodos(parsed)) {
      console.warn('Invalid todos data found in sessionStorage, clearing storage');
      window.sessionStorage.removeItem(STORAGE_KEY);
      return [];
    }

    // Convert createdAt strings back to Date objects
    return parsed.map(todo => ({
      ...todo,
      createdAt: typeof todo.createdAt === 'string' ? new Date(todo.createdAt) : todo.createdAt
    }));
  } catch (error) {
    console.warn('Failed to load todos from sessionStorage:', error);
    // Clear corrupted data
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore errors when clearing
    }
    return [];
  }
};

/**
 * Saves todos to sessionStorage
 * Returns true if successful, false if error occurs (e.g., quota exceeded)
 */
export const saveTodos = (todos: Todo[]): boolean => {
  try {
    const serialized = JSON.stringify(todos);
    window.sessionStorage.setItem(STORAGE_KEY, serialized);
    return true;
  } catch (error) {
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      console.warn('Storage quota exceeded - todos may not be saved:', error);
      return false;
    }
    console.error('Failed to save todos to sessionStorage:', error);
    return false;
  }
};

/**
 * Clears todos from sessionStorage
 */
export const clearTodos = (): void => {
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear todos from sessionStorage:', error);
  }
};