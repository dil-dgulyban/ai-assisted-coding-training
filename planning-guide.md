# Planning Guide Reference

## Purpose

This document provides a standardized approach for creating effective plan.md files for both AI and human developers. Following this guide ensures consistent planning, execution, and verification of any development task.

## Planning Process

### 1. Creating the Plan File

- Create a new file named `plan.md` in the repository root
- Use this as the single source of truth for planning and execution
- Always start by adding a descriptive title for the plan at the top
- Use Markdown formatting for clear structure and readability

### 2. Gather Context and Information

- Collect all user requirements and project context
- Extract relevant details from CLAUDE.md repository index
- Identify related components in the repository
- Determine constraints, dependencies, and requirements
- Document this information in the Context section of plan.md

### 3. Create Task List

- Break down the solution into discrete, manageable tasks
- Order tasks logically with dependencies clearly marked
- Present task list to user for review and refinement
- Iterate based on feedback until approved

### 4. Define Execution Strategy

- Document the step-by-step execution approach
- Include verification methods for each task
- Address potential risks and alternative approaches
- Set clear completion criteria

## Plan.md Structure

### Context

- Original user request (verbatim)
- Additional clarifications from discussion
- Related system components and architecture
- Constraints and requirements
- References to relevant documentation

### Task List

Structured as a series of tasks with consistent format:

````
## Task 1: [Title]
**Status**: [TODO | IN-PROGRESS | DONE]
**Depends On**: [List of task numbers or "None"]
**Description**:
[Detailed explanation of what needs to be done]

**Code Snippets**:
```[language]
// Example code structure or pattern to follow
// Include only when applicable to make implementation clearer
````

**Verification**:
[Specific steps to verify this task was completed successfully]

```

### Execution Guide
```

Execution process:

1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Complete verification steps
   d. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.

```

## Task Best Practices

### Task Definition
- Make tasks atomic and focused on a single objective
- Ensure tasks have clear completion criteria
- Avoid tasks that are too large or vague
- Include sufficient context in each task description
- Add relevant code snippets when applicable

### Dependency Management
- Minimize dependencies between tasks when possible
- Clearly document all dependencies
- Consider creating task chains that can be executed in parallel
- Design for maximum concurrent execution

### Code Snippets
- Include relevant code snippets to illustrate implementation patterns
- Use snippets to show structure, API usage, or integration points
- Keep snippets concise and focused on the key aspects of the task
- Include comments to explain important parts of the code
- Use proper syntax highlighting by specifying the language
- For complex tasks, consider before/after snippets to clarify changes

### Verification
- Include specific verification steps for each task
- Define expected outcomes and success criteria
- Consider edge cases in verification
- Include both functional and non-functional verification where appropriate

## Creating a New Plan

When a user requests assistance with a task, follow these steps to create a plan:

1. **Start Command**: Use the command `Let's create a plan for [task description]`
2. **Create File**: `I'll create a plan.md file to organize our approach`
3. **Follow Process**: Work through the planning process steps outlined above
4. **Present Plan**: Share the completed plan.md with the user for review
5. **Iterate**: Refine the plan based on feedback until approved
6. **Execute**: Begin execution using the plan.md file as the guide

## Plan Examples

### Example: Feature Implementation
```

# Plan: Add User Profile Export Feature

## Context

User request: "Add the ability for users to export their profile data in PDF format"
The profile page is in frontend/src/pages/Profile/index.tsx
Profile data is fetched from /api/users/{id}/profile
We have an existing PDF generation utility at utils/pdf-generator.js

## Task List

### Task 1: Create PDF Template Design

Status: TODO
Depends On: None
Description:
Design the PDF template for user profiles including layout, styling, and content placement.
Create a new template file in utils/pdf-templates/user-profile.js

Verification:
Template file exists and follows project style guidelines
Template includes all required user profile fields

### Task 2: Add Backend Export Endpoint

Status: TODO
Depends On: None
Description:
Create a new endpoint at /api/users/{id}/profile/export
Implement PDF generation using existing PDF utility
Ensure proper error handling and validation

Verification:
Endpoint returns 200 with PDF binary data when called with valid user ID
Endpoint returns appropriate error codes for invalid requests
Manually verify PDF content matches the template design

### Task 3: Add Export Button to Profile Page

Status: TODO
Depends On: None
Description:
Add an "Export Profile" button to the profile page UI
Style according to existing design system
Position in top-right corner of profile card

Verification:
Button appears correctly on desktop and mobile layouts
Button matches design system styling

### Task 4: Implement Frontend Export Functionality

Status: TODO
Depends On: [2, 3]
Description:
Connect export button to new backend endpoint
Implement loading state during export
Handle and display any errors
Trigger download when PDF is generated

Verification:
Clicking button triggers API call to export endpoint
Loading state is shown during export
Error messages display appropriately
PDF downloads successfully when complete

## Execution Guide

1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Complete verification steps
   d. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.

```

### Example: Bug Fix
```

# Plan: Fix Workflow State Transition Error

## Context

User request: "Fix bug RCP-24670: Cannot discard issues with sequential workflow"
Error message: "Action cannot be transitioned from action-pending to action-discarded"
Reproduction steps:

1. Create issue with sequential workflow
2. Try to discard it from action-pending state
3. Error appears preventing the transition

Workflow definitions are in backend/src/workflows/
Transition rules are defined in backend/src/workflows/transitions.js

## Task List

### Task 1: Investigate Workflow Definition

Status: TODO
Depends On: None
Description:
Examine the sequential workflow definition
Identify transition rules between action-pending and action-discarded states
Determine if transition rule is missing or incorrectly defined

Verification:
Confirm understanding of current workflow configuration
Identify specific issue preventing the transition

### Task 2: Implement Fix for Transition Rule

Status: TODO
Depends On: [1]
Description:
Modify workflow transition rules to allow transition from action-pending to action-discarded
Follow existing pattern for similar transitions
Ensure no side effects for other workflow states

Code Snippets:

```javascript
// Before:
const allowedTransitions = {
  'action-pending': ['action-complete', 'action-in-progress'],
  'action-in-progress': ['action-complete', 'action-pending'],
  'action-complete': ['action-pending'],
};

// After:
const allowedTransitions = {
  'action-pending': ['action-complete', 'action-in-progress', 'action-discarded'], // Add action-discarded as allowed transition
  'action-in-progress': ['action-complete', 'action-pending'],
  'action-complete': ['action-pending'],
};
```

Verification:
Code changes follow project conventions
Unit tests pass after changes

### Task 3: Verify Fix in Frontend

Status: TODO
Depends On: [2]
Description:
Use Playwright to reproduce the original issue:

- Create issue with sequential workflow
- Try to discard it from action-pending state
  Verify the transition now succeeds without error

Verification:
Playwright test completes successfully
No error messages appear during transition
Issue correctly moves to discarded state

## Execution Guide

1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Complete verification steps
   d. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.

```

```
