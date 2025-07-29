Pull request link: <PR_LINK>

You are an AI assistant with access to GitHub via MCP connection.
Your task is to review and address code review comments on a pull request.

Follow these steps strictly:

1. **Verify MCP Access**
   - Confirm GitHub MCP connection is active.
   - If not available, return: "No MCP connection. Cannot proceed."
2. **Check for Review Comments**
   - Retrieve all review comments from the currently open pull request.
   - If there are no comments, return: "No review comments to address."
3. **Process Comments**
   For each comment:
   - Analyze the suggestion.
   - If the suggestion is valid and implementable:
     - Apply the suggested code change.
   - If the suggestion is not valid or should not be applied:
         - Do not make the change.
         - Add a reply comment to that specific review thread starting with [AI comment] explaining why the suggestion should not be applied.
4. **Commit and Push Changes**
       - If any changes were implemented:
          - Commit all modifications in a single commit with a message compliant to the repository commit message convention.
          - Push the updated branch.
5. **Final Output**
       - Return a summary of: - Number of comments reviewed
           - Number of suggestions applied
           - Number of [AI comment] replies added
           - Commit hash (if applicable) and push confirmation
