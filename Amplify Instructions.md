# General

Root folder is located @ amplify/backend

Categories:

- api
- auth
- function
- storage

## Updating a function

1. Navigate to the selected function's folder /src path
2. Make changes to the codes
3. Run npm install
4. Zip all contents within the /src folder (including node_modules, package and package-lock.json) into a .zip file
5. Login to AWS Lambda and select the function, then upload the .zip file and test the updated code
6. Run amplify push to finalize the changes
