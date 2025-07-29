What AIADT Jira project is about? The related GitHub Repository is `dil-asomlai/ai-assisted-coding-training`. What is its tech stack?

Tasks

1. Verify if you can access the Jira project using MCP connection. Stop execution if no MCP connection
2. Verify is you can access the repository using MCP connection. Stop execution if no MCP connection
3. Answer the questions using data retreived from MCP connections

4. Check MCP Access
      - Confirm whether an active GitHub and Atlassian MCP connections is available.
      - If no MCP connection is detected, terminate the task immediately and return: "No MCP connection. Execution stopped."
5. Access Jira
      - Attempt to access the Jira project named AIADT.
      - If accessible, extract a concise summary of the project’s purpose and scope.
6. Access GitHub
      - Access the GitHub repository: dil-asomlai/ai-assisted-coding-training.
      - From the README.md, source code, and any configuration files (e.g., package.json, AI.md, Dockerfile), extract the technology stack.
7. Generate Final Output
   - Combine the information retrieved from Jira and GitHub.
   - Answer the following:
     - What is the AIADT Jira project about?
     - What is the tech stack used in the associated GitHub repository?
