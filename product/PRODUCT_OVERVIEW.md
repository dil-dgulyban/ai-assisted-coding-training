# AI Assisted Coding Workshop - TODO App Project

## Confluence Links

- [AI Assisted coding training](https://diligentbrands.atlassian.net/wiki/spaces/~712020923731ed2d794052a4e6abbe10605cb6/pages/5701829028/AI+Assisted+coding+training)
- [AI Assisted Coding - Presentation](https://diligentbrands.atlassian.net/wiki/spaces/~712020923731ed2d794052a4e6abbe10605cb6/pages/5701534481/AI+Assisted+Coding+-+Presentation)
- [Prerequisites](https://diligentbrands.atlassian.net/wiki/spaces/~712020923731ed2d794052a4e6abbe10605cb6/pages/5702713353/Prerequisites)

## Project Overview

This is the main repository for the AI assisted coding workshop. We need to create a TODO app with the following specifications:

- Frontend-only React application
- Uses Atlas UI components from Atlassian MCP
- Implements responsive design
- Features:
  - List todos
  - Add new todos
  - Edit existing todos by clicking on them
  - Use the same modal component for both create and edit operations

## Implementation Plan

- Create a plan based on the planning-guide
- Set up the project as a React app using Vite
- Implement up to the create functionality
- Plan but do not implement the edit functionality

Students will work with a plan that has been executed up to task list and create functionality. They will then create a new plan based on the planning guide to implement what's in a Jira task.

## Technical Requirements

- Use Vite for project setup
- Use Atlas UI components (explore available components via MCP)
- Use in-memory state only for simplicity
- Implement automated testing with React Testing Library for all functionality

## Task List for TODO App with Atlas UI

1. Set up React project with required dependencies (React, Atlas UI, TypeScript, React Testing Library)
   - Include setting up test environment and initial configuration
   - Write tests to verify project setup and build process

2. Configure Atlas UI components and styling with responsive design support
   - Create component library integration
   - Write tests for theme integration and responsive breakpoints

3. Create basic app structure with responsive layout
   - Implement main layout components
   - Write tests to verify responsive behavior and component rendering

4. Implement todo state management using React Context API
   - Create data models and context providers
   - Write tests for state management operations (add, get todos)

5. Create todo list component to display existing todos
   - Implement list view with proper UI components
   - Write tests for list rendering, empty states, and item display

6. Design and implement modal component for todos (initial version for create)
   - Create reusable modal with form elements
   - Write tests for modal open/close behavior and form validation

7. Implement create todo functionality with the modal
   - Connect modal to state management
   - Write tests for the complete create todo flow

8. Plan edit todo functionality (documentation only)
   - Document approach for extending the modal for editing
   - Create test plan for edit functionality without implementation
