<template>
    <main>
      <div class="container">
        <div class="title">
          <h1>Atualizar Patrocinador</h1>
          <form class="atualizar_patrocinador" @submit.prevent="atualizarPatrocinador">
            <label for="name">Nome do Patrocinador</label>
            <input type="text" id="name" name="name" placeholder="Nome" required />
    
            <label for="profilePicture">Logo do Patrocinador</label>
            <input type="file" id="profilePicture" name="profilePicture" accept="image/*" required />
            
            <div class="confirm">
              <button type="submit" class="designBotao">Atualizar</button>
            </div>
          </form>
          <div class="confirm">
            <button @click="excluirPatrocinador" class="designBotao deleteBotao">Excluir</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    methods: {
      atualizarPatrocinador() {
        // atualizar patrocinador
        console.log('Patrocinador atualizado');
      },
      excluirPatrocinador() {
        // excluir patrocinador
        console.log('Patrocinador excluído');
      }
    }
  }
  </script>
  
  <style scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* This makes sure the main takes the full height of the viewport */
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Centers the children elements horizontally */
    background-color: #F5F5F5;
    border-radius: 10px;
    color: black;
    padding: 1.5rem;
    width: 23rem;
    margin: 3% auto;
    max-width: 37.5rem;
    min-height: auto;
    overflow: auto;
  }
  
  .alto-contraste .container {
    background-color: hsl(0, 0%, 15%);
    color: white;
  }
  
  .title {
    width: 100%;
  }
  
  .title h1 {
    text-align: left;
  }
  
  .atualizar_patrocinador {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  
  .atualizar_patrocinador input[type="text"],
  .atualizar_patrocinador input[type="file"] {
    width: 100%; 
    max-width: 20rem;
  }
  
  .confirm {
    padding-top: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .designBotao { 
    background-color: #55AE4D;
    padding: 10px 155px; 
    color: black;
    font-weight: 400;
    text-decoration: none; 
    transition: all 0.3s ease;
    border-radius: 10px;
  }
  
  .designBotao:hover {
    background-color: #093d0c;
    color: #F5F5F5;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .designBotao:active {
    transform: scale(0.98); 
  }
  
  .deleteBotao {
    background-color: #FF5C5C;
  }
  
  .deleteBotao:hover {
    background-color: #D93636;
    color: #F5F5F5;
  }
  
  @media screen and (max-width: 48rem) {
    .container {
      max-width: 90%;
    }
  }
  </style>
