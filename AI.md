# Todo App with Atlas UI - Project Documentation

This document provides comprehensive information about the structure, architecture, and development practices of this Todo application. It's designed to help AI agents understand the codebase and contribute effectively.

## Project Overview

This is a React-based Todo application built with TypeScript, Vite, Material UI (MUI), and Atlas UI components. The app allows users to:

- Create new todo items
- View a list of todos
- Edit existing todos
- Mark todos as completed/uncompleted
- Delete todos

The application features a responsive design, follows modern React practices with hooks and context for state management, and includes comprehensive testing.

### Tech Stack

- **Frontend Framework**: React 19
- **UI Component Library**: Material UI 7 with Atlas UI components
- **Styling**: Emotion (CSS-in-JS)
- **Type Safety**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **CI/CD**: GitHub Actions

## Project Structure

```
/
├── .github/                 # GitHub metadata
│   └── workflows/           # CI workflows
├── .husky/                  # Git hooks for pre-commit checks
├── .cursor/                 # Cursor AI configuration (optional)
├── implementation-plans/    # Architecture & feature proposals
├── product/                 # Product documentation
├── prompt-library/          # AI prompt examples & workflows
├── public/                  # Static assets served by Vite
├── src/                     # Source code
│   ├── __tests__/           # Unit & component tests
│   ├── assets/              # Media assets
│   ├── components/          # React components
│   ├── contexts/            # React contexts (state management)
│   ├── hooks/               # Custom React hooks
│   ├── providers/           # Context providers & theming
│   ├── types/               # TypeScript type definitions
│   └── ...                  # Other source files
├── tmp/                     # Temporary generated files & prompt history
├── AI.md                    # Comprehensive project documentation
├── CLAUDE.md                # Claude-specific guidance
├── README.md                # Quick project overview
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point for Vite
├── package.json             # Dependencies and scripts
├── tsconfig.json            # Base TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
├── vite.config.ts           # Vite build configuration
└── vitest.config.ts         # Vitest test runner configuration
```

### Key Source Code Organization

The `src` directory follows a feature-based organization:

```
src/
├── __tests__/                   # Test files
├── assets/                      # Media assets
├── components/                  # React components
│   ├── CreateTodoButton/        # Todo creation button component
│   ├── Layout/                  # Layout components (Header, Footer)
│   ├── TodoList/                # Todo list related components
│   └── TodoModal/               # Modal for creating/editing todos
├── contexts/                    # React contexts
│   └── TodoContext.tsx          # Todo state management context
├── providers/                   # React providers
│   └── ThemeProvider.tsx        # Theme provider for Atlas UI
├── types/                       # TypeScript type definitions
│   └── Todo.ts                  # Todo interface definition
├── App.tsx                      # Main application component
├── App.css                      # Application-level styles
├── index.css                    # Global styles
└── main.tsx                     # Application entry point
```

## Core Components and Their Relationships

### Data Flow Architecture

The application follows a unidirectional data flow pattern:

1. **State Management**: `TodoContext` manages the application state
2. **UI Components**: Components consume the context and dispatch actions
3. **Actions**: Functions in the context modify the state
4. **Rendering**: UI re-renders based on state changes

### Key Components

#### 1. TodoContext (src/contexts/TodoContext.tsx)

This React context serves as the central state management system for todos. It provides:

- A list of todo items
- Functions to add, edit, delete, and toggle completion of todos
- A custom hook `useTodo()` for components to access todos and operations

Usage pattern:

```tsx
const { todos, addTodo, editTodo, toggleTodoCompletion, deleteTodo } = useTodo();
```

#### 2. App Component (src/App.tsx)

The root component that:

- Sets up the theme provider
- Establishes the todo context
- Renders the main layout (Header, TodoList, Footer)

#### 3. TodoList and TodoItem (src/components/TodoList/)

- `TodoList`: Renders the list of todos or an empty state message
- `TodoItem`: Renders individual todo items with completion checkbox and delete button

#### 4. TodoModal (src/components/TodoModal/TodoModal.tsx)

A modal dialog for creating new todos or editing existing ones with:

- Title and description input fields
- Completion checkbox (for edit mode)
- Validation for required fields

#### 5. CreateTodoButton (src/components/CreateTodoButton/CreateTodoButton.tsx)

A button that opens the TodoModal in "create" mode.

#### 6. Theme Provider (src/providers/ThemeProvider.tsx)

Provides the Atlas UI theme configuration for the entire application.

## Data Model

### Todo Entity (src/types/Todo.ts)

```typescript
interface Todo {
  id: string; // Unique identifier
  title: string; // Todo title
  description: string; // Todo description
  completed: boolean; // Completion status
  createdAt: Date; // Creation timestamp
}
```

## Development Workflow

### Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint to check and fix code style issues
- `npm run format`: Format code using Prettier
- `npm run format:check`: Check if code is properly formatted
- `npm run test`: Run tests with Vitest
- `npm run preview`: Preview the production build locally

### Code Quality Tools

The project is configured with:

1. **ESLint**: For code quality and best practices enforcement
2. **Prettier**: For consistent code formatting
3. **Husky**: For pre-commit hooks that run linting and formatting
4. **lint-staged**: To run checks only on staged files

### Git Workflow

1. Code changes should pass all pre-commit hooks (lint, format)
2. Commit messages should follow conventional commits format
3. GitHub Actions runs CI checks on push and pull requests

## Testing Strategy

Tests are located in the `src/__tests__/` directory and use Vitest with React Testing Library.

### Test Types

1. **Component Tests**: Verify component rendering and behavior
2. **Context Tests**: Verify state management logic
3. **Integration Tests**: Verify component interactions

### Running Tests

- Run all tests: `npm run test`
- Watch mode for development: `npm run test -- --watch`

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`) performs:

1. Linting code
2. Checking formatting
3. Building the project
4. Running tests

This ensures that all code changes maintain quality standards.

## Extending the Application

### Adding New Features

1. For new UI components:
   - Create a new directory in `src/components/`
   - Follow the existing component structure
   - Add tests in `src/__tests__/`

2. For new functionality:
   - Extend the `TodoContext` with new state and actions
   - Update types in `src/types/` if needed
   - Add corresponding UI components

### Styling Guidelines

- Use Material UI's `sx` prop for component styling
- Follow the Atlas UI design system
- Use responsive design patterns for different screen sizes

## Common Patterns

1. **Context Consumption**:

   ```tsx
   const { todos } = useTodo();
   ```

2. **Component Structure**:

   ```tsx
   export const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
     // Component logic
     return (
       // JSX markup
     );
   };
   ```

3. **Testing Pattern**:
   ```tsx
   describe('Component', () => {
     it('should render correctly', () => {
       render(<Component />);
       expect(screen.getByText('...')).toBeInTheDocument();
     });
   });
   ```

This documentation should provide AI assistants with a comprehensive understanding of the project structure, architecture, and development practices to effectively contribute to the codebase.
