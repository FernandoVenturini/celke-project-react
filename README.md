### Requirements
   *** Check the version of Node.js or higher
      ** node -v
   *** Check if npx is installed:
      ** npm -v

<<<<<<< HEAD
### Instalar todas as dependencias indicadas pelo package.json:
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

### Node.js - Sequencia para criar o projeto:
   *** npm init -y

### Instalando o Express para gerenciar as requisicoes, rotas, URLs, entre outras funcionalidades:
   *** npm i express

### Instalar os pacotes para suporte ao TypeScript:
   *** npm i --save-dev @types/express
   *** npm i --save-dev @types/node

### Instalar o compilador projeto com TypeScript e reiniciar o projeto quando o arquivo e modificado:
   *** npm i --save-dev ts-node

### Gerar o arquivo de configuracao para o TypeScript:
   *** npx tsc --init

### Compilar o arquivo Typecript:
   *** npx tsc

### Executar o arquivo gerado com Node.js:
   *** node dist/index.js

### Como rodar o projeto baixado
   *** node dist/index.js

### Como enviar e baixar os arquivos do Github
   *** Baixar os arquivos do git
      ** git clone -b (nome da branch) (nome do repositorio url)

### Verificar em qual branch esta
   *** git branch

### Troque para a branch desejada:
   *** git checkout <nome-da-branch>

### Verifique as branches remotas:
   *** git branch -r (Isso listará todas as branches remotas do seu repositório.)

### Buscando as branches remotas:
   *** git fetch (Isso atualizará as informações sobre as branches remotas.)
   *** Agora, execute git branch -r novamente para verificar se a branch "origin/development" está atualizada.

### Crie uma branch local a partir da branch remota:
   *** Após buscar as branches remotas, você pode criar uma branch local chamada "nome da branch" a partir da branch remota "origin/nome da branch".
   *** Execute o comando git checkout -b nome da branch origin/nome da branch no terminal.
   *** Isso criará uma nova branch local chamada "nome da branch" e a configurará para rastrear a branch remota "origin/nome da branch".

### Baixar as atualizacoes do Github
   *** git pull

### Adicionar todos os arquivos modificados no staging area - area de preparacao.
   *** git add .

### Fazer Commit
   *** git commit -m "mensagem do commit aqui"

### Enviar os commits locais para um repositorio remoto
   *** git push origin -u (nome da branch)

### Enviando o codigo atualizado para o github pelo vscode
   *** Clica no icone do git
   *** Clica no +
   *** Escreve a msg de commit
   *** Commit & push
