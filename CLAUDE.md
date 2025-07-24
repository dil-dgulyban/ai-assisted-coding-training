# Claude Code - Todo App with Atlas UI

This document provides specific guidance for Claude Code when working with this Todo application project.

## Project Overview

This is a React-based Todo application built with TypeScript, Material UI, and Atlas UI components. For comprehensive documentation of the project structure, architecture, and development practices, please refer to the [AI.md](./AI.md) file.

## Key Files and Components

- `src/App.tsx`: Root component that sets up providers and layout
- `src/contexts/TodoContext.tsx`: Context for state management of todo items
- `src/components/TodoList/TodoList.tsx`: Component for rendering the list of todos
- `src/components/TodoModal/TodoModal.tsx`: Modal for creating and editing todos
- `src/types/Todo.ts`: TypeScript interface for Todo items

## Common Tasks and Commands

### Development

```bash
# Start development server
npm run dev

# Build the project
npm run build

# Format code
npm run format

# Run linting
npm run lint

# Run tests
npm run test
```

### File Creation Patterns

When creating new files, please follow these patterns:

1. **Components**:

   ```tsx
   import React from 'react';

   interface ComponentProps {
     // Props definition
   }

   export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
     // Component logic

     return (
       // JSX markup
     );
   };
   ```

2. **Tests**:

   ```tsx
   import { render, screen } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import { ComponentName } from '../path/to/Component';
   import { vi, describe, it, expect } from 'vitest';

   describe('ComponentName', () => {
     it('should render correctly', () => {
       render(<ComponentName />);
       // Assertions
     });
   });
   ```

## Code Style and Best Practices

1. **State Management**: Use the `useTodo` hook to access todo state and operations

   ```tsx
   const { todos, addTodo, toggleTodoCompletion } = useTodo();
   ```

2. **Styling**: Use Material UI's `sx` prop for component styling

   ```tsx
   <Box
     sx={{
       display: 'flex',
       flexDirection: 'column',
       gap: 2
     }}
   >
   ```

3. **TypeScript**: Always define proper interfaces for component props and use type safety

4. **Testing**: Write comprehensive tests for components and logic

## Common Issues and Solutions

1. **TypeScript Errors**: Remember to use type-only imports with `import type` syntax when importing only types

   ```tsx
   import type { Todo } from '../types/Todo';
   ```

2. **Material UI Styling**: Use theme values and responsive design patterns
   ```tsx
   sx={{
     py: { xs: 2, sm: 3, md: 4 },
     color: theme => theme.palette.text.primary
   }}
   ```

## Additional Resources

For more detailed information about the project structure, architecture, and development practices, please refer to the [AI.md](./AI.md) file.
