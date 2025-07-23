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
- Include automated testing as a core component of each task
- Iterate based on feedback until approved

### 4. Define Execution Strategy
- Document the step-by-step execution approach
- Include automated test implementation as part of each task execution
- Address potential risks and alternative approaches
- Set clear completion criteria that include passing all automated tests

## Plan.md Structure

### Context
- Original user request (verbatim)
- Additional clarifications from discussion
- Related system components and architecture
- Constraints and requirements
- References to relevant documentation
- Testing approach and methodology

### Task List
Structured as a series of tasks with consistent format:

```
## Task 1: [Title]
**Status**: [TODO | IN-PROGRESS | DONE]
**Depends On**: [List of task numbers or "None"]
**Description**:
[Detailed explanation of what needs to be done]

**Testing**:
[Specific automated tests to be created for this task]

**Verification**:
[Steps to verify this task was completed successfully, primarily through automated tests]
```

### Execution Guide
```
Execution process:

1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Implement required automated tests
   d. Ensure all automated tests pass
   e. Complete any additional verification steps
   f. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.
```

## Task Best Practices

### Task Definition
- Make tasks atomic and focused on a single objective
- Ensure tasks have clear completion criteria
- Avoid tasks that are too large or vague
- Include sufficient context in each task description

### Dependency Management
- Minimize dependencies between tasks when possible
- Clearly document all dependencies
- Consider creating task chains that can be executed in parallel
- Design for maximum concurrent execution

### Automated Testing
- Every task must include specific automated tests
- Tests should be written concurrently with or before the implementation
- Tests must verify both happy paths and edge cases
- All tests must pass before a task can be marked as DONE

### Verification
- Primary verification should be through automated tests
- Define expected outcomes and success criteria in terms of test assertions
- Consider edge cases in test coverage
- Include both functional and non-functional verification where appropriate
- Manual verification should only be used when automated testing is not feasible

## Creating a New Plan

When a user requests assistance with a task, follow these steps to create a plan:

1. **Start Command**: Use the command `Let's create a plan for [task description]`
2. **Create File**: `I'll create a plan.md file to organize our approach`
3. **Follow Process**: Work through the planning process steps outlined above
4. **Present Plan**: Share the completed plan.md with the user for review
5. **Iterate**: Refine the plan based on feedback until approved
6. **Execute**: Begin execution using the plan.md file as the guide

## Plan Examples

### Example: Generic Feature Implementation
```
# Plan: Add New Feature X

## Context
User request: "Add the ability for users to perform X action"
Feature will interact with existing components in [location]
Requires changes to both frontend and backend
Automated testing will be implemented for all changes

## Task List

### Task 1: Design Feature Architecture
Status: TODO
Depends On: None
Description:
Design the architecture for feature X including component interactions, data flow, and API requirements.
Document design decisions and constraints.

Testing:
Create test plan document covering unit, integration, and end-to-end tests
Define test boundaries and mocking strategy

Verification:
Design review completed
Test plan approved
Architecture satisfies all requirements

### Task 2: Implement Backend Components
Status: TODO
Depends On: [1]
Description:
Implement required backend services, endpoints, and data models
Ensure proper error handling and validation

Testing:
Create unit tests for all new functions
Implement API tests for new endpoints
Test error handling cases
Validate data integrity

Verification:
All tests pass
Code review completed
Implementation matches design specifications

### Task 3: Create Frontend UI Elements
Status: TODO
Depends On: [1]
Description:
Implement UI components needed for the feature
Follow existing design patterns and accessibility guidelines

Testing:
Create component tests for rendering and state
Test accessibility compliance
Verify responsive behavior

Verification:
All component tests pass
Components render correctly in all target environments
Design guidelines followed consistently

### Task 4: Integrate Frontend and Backend
Status: TODO
Depends On: [2, 3]
Description:
Connect frontend components to backend services
Implement error handling and loading states
Ensure consistent behavior across the system

Testing:
Create integration tests for the complete feature flow
Test error scenarios and recovery
Verify end-to-end functionality

Verification:
All integration tests pass
Feature works as expected across all scenarios
Performance metrics meet requirements

## Execution Guide
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
```