###Requirements
 *** Check the version of Node.js or higher
 ** node -v
 *** Check if npx is installed:
 ** npm -v

<<<<<<< HEAD
### Install all dependencies indicated by package.json:
 *** npm install
=======
### How to run the downloaded project:
>>>>>>> 3bc5321a4445b64b17d89fc1cc42bf460295c43a

### Sequence to create the project:
 *** Create the project with React and Next.js:
 ** npm create-next-app@latest . (The '.' indicates that the project will be created in the same directory).

### Run the React project:
*** npm run dev

### Access the URL in the browser:
*** http://localhost:3000/
*** http://localhost:3001/
*** http://localhost:5173/

### Node.js - Sequence to create the project:
*** npm init -y

### Installing Express to manage requests, routes, URLs, among other features:
*** npm i express

### Install the packages to support TypeScript:
*** npm i --save-dev @types/express
*** npm i --save-dev @types/node

### Install the project compiler with TypeScript and restart the project when the file is modified:
*** npm i --save-dev ts-node

### Generate the configuration file for TypeScript:
*** npx tsc --init

### Compile the Typescript file:

*** npx tsc

### Run the generated file with Node.js:

*** node dist/index.js

### How to run the downloaded project

*** node dist/index.js

### How to upload and download files from Github

*** Download files from git
** git clone -b (branch name) (repository name url)

### Check which branch you are on
*** git branch

### Switch to the desired branch:

*** git checkout <branch-name>

### Check the remote branches:

<<<<<<< HEAD
### Enviar os commits locais para um repositorio remoto
   *** git push origin -u (nome da branch)

### Enviando o codigo atualizado para o github pelo vscode
   *** Clica no icone do git
   *** Clica no +
   *** Escreve a msg de commit
   *** Commit & push
=======
*** git branch -r (This will list all the remote branches of your repository.)

### Fetch the remote branches:

*** git fetch (This will update the information about the remote branches.)

*** Now, run git branch -r again to check if the "origin/development" branch is up to date.

### Create a local branch from the remote branch:

*** After fetching the remote branches, you can create a local branch named "branch name" from the remote branch "origin/branch name".

*** Run the command git checkout -b branch name origin/branch name in the terminal.

*** This will create a new local branch named "branch name" and set it to track the remote branch "origin/branch name".

### Download updates from Github

*** git pull

### Add all modified files to the staging area.

*** git add .

### Commit

*** git commit -m "commit message here"

### Push local commits to a remote repository

*** git push origin -u (branch name)
>>>>>>> 8c51f38d854d6fb3d4b23916af9bb230853bef93

### Como instalar nodemon
   *** npm install -g nodemon
   