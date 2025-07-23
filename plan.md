# Plan: Create a TODO App with Atlas UI

## Task Overview
| # | Task | Status | Dependencies |
|---|------|--------|-------------|
| 1 | Set up React project with required dependencies in a temp subfolder, then copy to current folder | DONE | None |
| 2 | Configure Atlas UI components and styling | DONE | 1 |
| 3 | Create basic app structure with responsive layout | TODO | 2 |
| 4 | Implement todo state management | TODO | 3 |
| 5 | Create todo list component | TODO | 4 |
| 6 | Design and implement modal component for todos | TODO | 4 |
| 7 | Implement create todo functionality | TODO | 5, 6 |
| 8 | Implement edit todo functionality | TODO | 7 |

## Context
User request: "Create a TODO app with Atlas UI components that allows users to list, add, and edit todos with a modal interface."

This TODO app is part of an AI assisted coding workshop to demonstrate how to create a modern React application with Atlas UI components. The application will be purely frontend, focusing on responsive design and proper component architecture.

Requirements:
- Frontend-only React application using Vite
- Atlas UI components from Diligent MCP
- Responsive design for all screen sizes
- Todo functionality:
  - List todos
  - Add new todos (using modal)
  - Edit existing todos by clicking on them (using the same modal as for creation)
- In-memory state management using React Context API
- Automated testing with React Testing Library throughout development

## Task List

### Task 1: Set up React project with required dependencies in a temp subfolder, then copy to current folder
**Description**:
Create a new React application using Vite in a temporary subfolder. Set up TypeScript for type safety. Install Atlas UI components and React Testing Library for automated testing. Then copy the project files to the repository root.

Configure the project structure with separate directories for components, contexts, types, and tests. Set up initial configuration files including tsconfig.json, vite.config.ts, and testing configuration.

Code Snippets:
```bash
# Project initialization in temporary subfolder
mkdir temp-project
cd temp-project
npm create vite@latest . -- --template react-ts
npm install
```

```json
// package.json dependencies to add
{
  "dependencies": {
    "@diligentcorp/atlas-react-icons": "^x.x.x",
    "@diligentcorp/atlas-theme-react-lens": "^x.x.x",
    "@mui/material": "^5.x.x",
    "@emotion/react": "^11.x.x",
    "@emotion/styled": "^11.x.x",
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "uuid": "^9.x.x"
  },
  "devDependencies": {
    "@testing-library/react": "^14.x.x",
    "@testing-library/user-event": "^14.x.x",
    "vitest": "^x.x.x",
    "jsdom": "^x.x.x",
    "@types/uuid": "^9.x.x"
  }
}
```

**Testing**:
Create basic test setup and verification tests to ensure the project is properly configured.

```typescript
// src/__tests__/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/todo app/i)).toBeInTheDocument();
});
```

**Verification**:
- Project structure is created in temporary subfolder with all necessary directories
- All dependencies are correctly installed
- TypeScript is properly configured
- Tests run successfully
- Application builds and runs without errors
- Files are successfully copied to the repository root

### Task 2: Configure Atlas UI components and styling
**Description**:
Set up Atlas UI configuration including the prebuilt "Lens" theme provider and required CSS imports. Configure responsive layout breakpoints to ensure the application works on different device sizes.

Code Snippets:
```tsx
// src/providers/ThemeProvider.tsx
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { lensTheme } from '@diligentcorp/atlas-theme-react-lens';

interface AtlasThemeProviderProps {
  children: React.ReactNode;
}

export const AtlasThemeProvider: React.FC<AtlasThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={lensTheme}>
      {children}
    </ThemeProvider>
  );
};
```

```tsx
// src/App.tsx
import { CssBaseline } from '@mui/material';
import { AtlasThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <AtlasThemeProvider>
      <CssBaseline />
      <div className="app-container">
        <h1>Todo App</h1>
        {/* App content will go here */}
      </div>
    </AtlasThemeProvider>
  );
}

export default App;
```

**Testing**:
Create tests to verify theme configuration and responsive styling.

```typescript
// src/__tests__/theme.test.tsx
import { render } from '@testing-library/react';
import { AtlasThemeProvider } from '../providers/ThemeProvider';

test('Theme provider renders children correctly', () => {
  const { getByText } = render(
    <AtlasThemeProvider>
      <div>Test content</div>
    </AtlasThemeProvider>
  );
  expect(getByText('Test content')).toBeInTheDocument();
});
```

**Verification**:
- Atlas UI components render with correct Lens theme styling
- Theme provider is properly configured
- Responsive breakpoints work correctly across different screen sizes
- All theme-related tests pass

### Task 3: Create basic app structure with responsive layout
**Description**:
Create the main layout components for the application including header, content area, and container structure. Implement responsive styling to ensure proper display on different devices.

Code Snippets:
```tsx
// src/components/Layout/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="h1">
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
```

```tsx
// src/App.tsx
import { CssBaseline, Container, Box } from '@mui/material';
import { AtlasThemeProvider } from './providers/ThemeProvider';
import { Header } from './components/Layout/Header';

function App() {
  return (
    <AtlasThemeProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
          {/* App content will go here */}
        </Container>
      </Box>
    </AtlasThemeProvider>
  );
}

export default App;
```

**Testing**:
Create tests to verify layout components and responsive behavior.

```typescript
// src/__tests__/Layout.test.tsx
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Layout/Header';

test('Header renders correctly', () => {
  render(<Header />);
  expect(screen.getByText('Todo App')).toBeInTheDocument();
});

// Additional tests for responsive behavior would use 
// window resizing and check computed styles
```

**Verification**:
- Basic app layout renders correctly
- Layout is responsive on different screen sizes
- Components maintain proper styling across devices
- All layout tests pass

### Task 4: Implement todo state management
**Description**:
Create a state management solution using React Context API to handle the todo items. Define the Todo data model with proper TypeScript types. Implement functions for adding todos (and prepare for future editing and marking as complete).

Code Snippets:
```typescript
// src/types/Todo.ts
export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
```

```typescript
// src/contexts/TodoContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Todo } from '../types/Todo';
import { v4 as uuidv4 } from 'uuid';

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  // Future methods will be added for edit functionality
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };
  
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
```

**Testing**:
Create tests for the todo context to verify state management functionality.

```typescript
// src/__tests__/TodoContext.test.tsx
import { render, act } from '@testing-library/react';
import { TodoProvider, useTodo } from '../contexts/TodoContext';

const TestComponent = () => {
  const { todos, addTodo } = useTodo();
  
  return (
    <div>
      <button onClick={() => addTodo('Test Todo', 'Test Description')}>
        Add Todo
      </button>
      <div data-testid="todo-count">{todos.length}</div>
    </div>
  );
};

test('TodoProvider manages todo state correctly', () => {
  const { getByText, getByTestId } = render(
    <TodoProvider>
      <TestComponent />
    </TodoProvider>
  );
  
  expect(getByTestId('todo-count').textContent).toBe('0');
  
  act(() => {
    getByText('Add Todo').click();
  });
  
  expect(getByTestId('todo-count').textContent).toBe('1');
});
```

**Verification**:
- Todo context properly manages state
- Add todo functionality works correctly
- State is accessible throughout the application
- All context tests pass

### Task 5: Create todo list component
**Description**:
Create a component to display the list of todos. Show each todo item with its title, description, and completion status. Display an appropriate empty state when no todos exist.

Code Snippets:
```tsx
// src/components/TodoList/TodoList.tsx
import React from 'react';
import { List, Paper, Typography, Box } from '@mui/material';
import { useTodo } from '../../contexts/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Paper sx={{ p: 3, textAlign: 'center', width: '100%', maxWidth: 600 }}>
          <Typography variant="body1">No todos yet. Create your first todo!</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Paper sx={{ mt: 3 }}>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Paper>
  );
};
```

```tsx
// src/components/TodoList/TodoItem.tsx
import React from 'react';
import { ListItem, ListItemText, Divider } from '@mui/material';
import { Todo } from '../../types/Todo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <>
      <ListItem>
        <ListItemText 
          primary={todo.title} 
          secondary={todo.description} 
        />
      </ListItem>
      <Divider />
    </>
  );
};
```

**Testing**:
Create tests for the todo list and todo item components.

```typescript
// src/__tests__/TodoList.test.tsx
import { render, screen } from '@testing-library/react';
import { TodoProvider } from '../contexts/TodoContext';
import { TodoList } from '../components/TodoList/TodoList';

test('TodoList shows empty state when no todos exist', () => {
  render(
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
  expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();
});

test('TodoList renders todo items when todos exist', () => {
  // Mock the useTodo hook to return predefined todos
  jest.mock('../contexts/TodoContext', () => ({
    useTodo: () => ({
      todos: [
        { id: '1', title: 'Test Todo', description: 'Test Description', completed: false, createdAt: new Date() }
      ]
    })
  }));
  
  render(<TodoList />);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});
```

**Verification**:
- Todo list renders correctly
- Empty state is displayed when no todos exist
- Todo items display correctly with all information
- All list component tests pass

### Task 6: Design and implement modal component for todos
**Description**:
Create a reusable modal component using MUI's Dialog component with Atlas Lens styling. Implement a form for entering todo details (title and description) with proper validation.

Code Snippets:
```tsx
// src/components/TodoModal/TodoModal.tsx
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Box 
} from '@mui/material';
import { useTodo } from '../../contexts/TodoContext';

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose }) => {
  const { addTodo } = useTodo();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');

  const validateForm = () => {
    if (!title.trim()) {
      setTitleError('Title is required');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    addTodo(title.trim(), description.trim());
    onClose();
    // Reset form
    setTitle('');
    setDescription('');
    setTitleError('');
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Create Todo</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (e.target.value.trim()) setTitleError('');
              }}
              fullWidth
              required
              error={!!titleError}
              helperText={titleError}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
```

**Testing**:
Create tests for the modal component to verify rendering and form validation.

```typescript
// src/__tests__/TodoModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoProvider } from '../contexts/TodoContext';
import { TodoModal } from '../components/TodoModal/TodoModal';

test('TodoModal renders correctly when open', () => {
  render(
    <TodoProvider>
      <TodoModal isOpen={true} onClose={() => {}} />
    </TodoProvider>
  );
  
  expect(screen.getByText('Create Todo')).toBeInTheDocument();
  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Description')).toBeInTheDocument();
  expect(screen.getByText('Create')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
});

test('TodoModal does not render when closed', () => {
  render(
    <TodoProvider>
      <TodoModal isOpen={false} onClose={() => {}} />
    </TodoProvider>
  );
  
  expect(screen.queryByText('Create Todo')).not.toBeInTheDocument();
});
```

**Verification**:
- Modal opens and closes correctly
- Form displays with proper fields
- Form validation works correctly
- All modal component tests pass

### Task 7: Implement create todo functionality
**Description**:
Connect the modal component with the todo state management to implement the complete create todo functionality. Add a button to open the modal and create new todos.

Code Snippets:
```tsx
// src/components/CreateTodoButton/CreateTodoButton.tsx
import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@diligentcorp/atlas-react-icons/dist/esm/lens/AddCircle.js';
import { TodoModal } from '../TodoModal/TodoModal';

export const CreateTodoButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button 
        variant="contained" 
        color="primary"
        startIcon={<AddCircleIcon />}
        onClick={() => setIsModalOpen(true)}
      >
        Create Todo
      </Button>
      
      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
```

```tsx
// Update src/App.tsx to include the create button
import { CssBaseline, Container, Box } from '@mui/material';
import { AtlasThemeProvider } from './providers/ThemeProvider';
import { TodoProvider } from './contexts/TodoContext';
import { Header } from './components/Layout/Header';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

function App() {
  return (
    <AtlasThemeProvider>
      <CssBaseline />
      <TodoProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <CreateTodoButton />
            </Box>
            <TodoList />
          </Container>
        </Box>
      </TodoProvider>
    </AtlasThemeProvider>
  );
}

export default App;
```

**Testing**:
Create integration tests for the complete create todo flow.

```typescript
// src/__tests__/CreateTodo.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from '../contexts/TodoContext';
import App from '../App';

test('Complete create todo flow works correctly', async () => {
  const user = userEvent.setup();
  render(
    <TodoProvider>
      <App />
    </TodoProvider>
  );
  
  // Initially should show empty state
  expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();
  
  // Click create button
  await user.click(screen.getByText('Create Todo'));
  
  // Modal should appear
  expect(screen.getByText('Create Todo')).toBeInTheDocument();
  
  // Fill in the form
  await user.type(screen.getByLabelText('Title'), 'Test Todo');
  await user.type(screen.getByLabelText('Description'), 'This is a test todo');
  
  // Submit the form
  await user.click(screen.getByText('Create'));
  
  // Modal should close and todo should appear in the list
  await waitFor(() => {
    expect(screen.queryByText('Create Todo')).not.toBeInTheDocument();
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('This is a test todo')).toBeInTheDocument();
  });
});
```

**Verification**:
- Create button opens the modal correctly
- Form submission creates a new todo
- New todo appears in the list after creation
- All integration tests for the create flow pass

### Task 8: Implement edit todo functionality
**Description**:
Implement the ability to edit existing todo items by clicking on them. Extend the modal component to handle both create and edit modes. Update the todo context to include an edit function. Make todo items clickable to open the edit modal with pre-filled data.

Code Snippets:
```typescript
// Update TodoContext.tsx to include edit functionality
interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  editTodo: (id: string, updates: Partial<Todo>) => void;
}

// Inside TodoProvider:
const editTodo = (id: string, updates: Partial<Todo>) => {
  setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, ...updates } : todo
  ));
};
```

```tsx
// Update TodoModal.tsx to handle both create and edit modes
interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'create' | 'edit';
  initialValues?: {
    id: string;
    title: string;
    description: string;
  };
}

export const TodoModal: React.FC<TodoModalProps> = ({ 
  isOpen, 
  onClose, 
  mode = 'create',
  initialValues
}) => {
  const { addTodo, editTodo } = useTodo();
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  
  // Reset form or load values when modal opens
  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && initialValues) {
        setTitle(initialValues.title);
        setDescription(initialValues.description);
      } else {
        setTitle('');
        setDescription('');
      }
    }
  }, [isOpen, mode, initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'create') {
      addTodo(title.trim(), description.trim());
    } else if (mode === 'edit' && initialValues) {
      editTodo(initialValues.id, { 
        title: title.trim(), 
        description: description.trim() 
      });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        {mode === 'create' ? 'Create Todo' : 'Edit Todo'}
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {mode === 'create' ? 'Create' : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
```

```tsx
// Update TodoItem.tsx to handle click events
export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ListItem 
        button 
        onClick={() => setIsModalOpen(true)}
        sx={{ cursor: 'pointer' }}
      >
        <ListItemText 
          primary={todo.title} 
          secondary={todo.description} 
        />
      </ListItem>
      <Divider />
      
      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="edit"
        initialValues={{
          id: todo.id,
          title: todo.title,
          description: todo.description
        }}
      />
    </>
  );
};
```

**Testing**:
Create tests for the edit todo functionality.

```typescript
// src/__tests__/EditTodo.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from '../contexts/TodoContext';
import { TodoItem } from '../components/TodoList/TodoItem';
import { TodoModal } from '../components/TodoModal/TodoModal';

// Mock todo item
const mockTodo = {
  id: '123',
  title: 'Test Todo',
  description: 'Original description',
  completed: false,
  createdAt: new Date()
};

test('Todo items are clickable and open edit modal', async () => {
  const user = userEvent.setup();
  render(
    <TodoProvider>
      <TodoItem todo={mockTodo} />
    </TodoProvider>
  );
  
  // Click the todo item
  await user.click(screen.getByText('Test Todo'));
  
  // Modal should appear with the todo data pre-filled
  expect(screen.getByText('Edit Todo')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Test Todo')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Original description')).toBeInTheDocument();
});

test('Edit modal updates todo when submitted', async () => {
  const user = userEvent.setup();
  // Create a mock for the editTodo function
  const mockEditTodo = jest.fn();
  
  // Mock the context with our custom function
  jest.mock('../contexts/TodoContext', () => ({
    useTodo: () => ({
      editTodo: mockEditTodo
    })
  }));
  
  render(
    <TodoModal
      isOpen={true}
      onClose={() => {}}
      mode="edit"
      initialValues={{
        id: '123',
        title: 'Test Todo',
        description: 'Original description'
      }}
    />
  );
  
  // Change the values
  await user.clear(screen.getByDisplayValue('Test Todo'));
  await user.type(screen.getByLabelText('Title'), 'Updated Todo');
  
  await user.clear(screen.getByDisplayValue('Original description'));
  await user.type(screen.getByLabelText('Description'), 'Updated description');
  
  // Submit the form
  await user.click(screen.getByText('Save'));
  
  // Check that editTodo was called with the right arguments
  expect(mockEditTodo).toHaveBeenCalledWith('123', {
    title: 'Updated Todo',
    description: 'Updated description'
  });
});
```

**Verification**:
- Todo items are clickable and open the edit modal
- Edit modal is pre-filled with existing todo data
- Submitting edited todo updates the item in the list
- UI correctly reflects the updated todo information
- All tests for edit functionality pass

## Execution Guide

Execution process:

1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Implement required automated tests
   d. Ensure all tests pass
   e. Complete any additional verification steps
   f. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.