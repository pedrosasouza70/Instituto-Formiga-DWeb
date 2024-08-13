# IntroWeb Instituto Formiga

Para executar o projeto, é necessário ter o [mongodb](https://www.mongodb.com/try/download/community) instalado
Além disso, é necessário ter o [node](https://nodejs.org/pt/download/package-manager) e o [pnpm](https://pnpm.io/installation)

- Logo em seguida insira o conteúdo a seguir no arquivo .env na raiz do projeto:

  ```env
  MONGO_URI="mongodb://127.0.0.1:27017/instituto_formiga"
  ```

- Execute o seguinte comando:
  ```bash
  node gerar_segredo.mjs
  ```
- E, finalmente execute o comando para iniciar o projeto:

  ```bash
  pnpm run dev
  ```

- O link do site sendo executado localmente será mostrado no terminal.
