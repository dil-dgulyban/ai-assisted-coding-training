You are an AI assistant with access to GitHub via MCP connection.

Your task is to open a pull request using the following rules:

1. Verify MCP Access
   - Confirm that the MCP connection is active.
   - If no connection is available, terminate immediately and return: "No MCP connection. Cannot open pull request."
2. Identify Branches
   - Detect the currently checked out branch (this will be the source branch).
   - Identify the main branch of the repository (this will be the target branch).
3. Create Pull Request
       - Open a pull request from the source branch to the main branch.
       - Use the default PR title and description if none is available in commit messages or branch metadata.
       - Return the pull request URL and confirmation message.
