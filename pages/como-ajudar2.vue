<template>
  <main>
      <div class="banner">
          <h1>SUA AJUDA FAZ DIFERENÇA!</h1>
      </div>

      <div class="container">

          <div class="donation-card">
              
              <p>Doação para:</p>
              <h2>Instituto Formiga</h2>
              <p>Uma doação financeira para uma ONG dedicada a oferecer atividades esportivas e outras iniciativas para a comunidade pode desencadear um impacto significativo e multifacetado. Ao contribuir com recursos, está-se potencializando oportunidades de desenvolvimento pessoal, social e físico para um vasto espectro de pessoas, desde crianças até idosos. Essa generosidade não apenas viabiliza a prática esportiva, mas também promove a inclusão, o trabalho em equipe e a saúde mental e física.</p>
              
              <br/>

              <p>Você ajudará com um valor de:</p>
              <h1>R$ XX,XX</h1>

              <div class="image-container">
                  <!-- QR code -->
                  <img
                      :src="'https://www.gov.br/pt-br/imagens-de-servicos/qrcodeminfra.png'"
                      alt="Pix QR code"
                      class="responsive-image"/>
              </div>

              <p>Chave PIX: FFFF.FFFF.FFFF.FFFF</p>

              <br/>
              
              <div class="confirm">
                  <label>
                      <input type="text" placeholder="Insira o código do comprovante do PIX aqui"/>
                  </label>

                  <br/>
                  <br/>

                  <label>
                      <button class="designBotao" @click="">CONFIRMAR DOAÇÃO</button>
                  </label>
              </div>
          </div>
      </div>
  </main>
</template>


<style scoped>
main {

}

.banner {
  background-image: url(https://png.pngtree.com/background/20230425/original/pngtree-ants-standing-on-moss-leaves-picture-image_2471233.jpg);
  background-position: 50% 55%;
  background-size: cover;
  padding: 5%;
  text-align: center;
}

.banner h1 {
  margin-right: 10%;
  margin-left: 10%;
  font-weight: bold;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.container {
  background-color: #F5F5F5;
  border-radius: 10px;
  color: black;
  padding: 2rem;
  width: 50rem;
  margin: 3% auto;
  max-width: 37.5rem;
  min-height: auto;
  overflow: auto;
}

.alto-contraste .container{
  background-color: hsl(0, 0%, 15%);
  color:white;
}

.donation-card {
  display: block;
  justify-content: center;
  text-align: center;
}

.donation-card h2 {
  color:#55AE4D;
}

.image-container {
  max-width: 100%;
  max-height: 100%;
}

.confirm {
  justify-content: center;
  width: 65%;
  margin: 5% auto;
}

.designBotao { 
  background-color: #55AE4D;
  padding: 10px 20px; 
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

/* Apply responsive styles for smaller screens */
@media screen and (max-width: 48rem) {
  .container {
      max-width: 90%;
  }
}
</style>