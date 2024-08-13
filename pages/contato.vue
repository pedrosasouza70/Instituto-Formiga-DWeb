<template>
  <main>
    <div class="banner">
      <h1>ENTRE EM CONTATO</h1>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div id="fale-conosco">
          <h1>Fale Conosco</h1>
          <br />
          <picture style="margin-left: 20px">
            <img
              src="/icon localizacao.png"
              alt="icone de localizacao"
              style="
                max-width: 30px;
                margin-right: 10px;
                vertical-align: middle;
              "
            />
          </picture>
          <p style="display: inline-block">
            Rua Prof. Péricles Soares, 406 Santa Felícia - São Carlos - SP
          </p>
          <br />
          <picture style="margin-left: 20px">
            <img
              src="/icon telefone.png"
              alt="icone de telefone"
              style="
                max-width: 30px;
                margin-right: 10px;
                vertical-align: middle;
              "
            />
          </picture>
          <p style="display: inline-block">(16) 3413-7691</p>
          <br />
          <picture style="margin-left: 20px">
            <img
              src="/icon email.png"
              alt="icone de carta"
              style="
                max-width: 30px;
                margin-right: 10px;
                vertical-align: middle;
              "
            />
          </picture>
          <p style="display: inline-block">
            institutoformiga.saocarlos@gmail.com
          </p>
          <br />
          <br />
        </div>
        <div>
          <h1>Envie uma mensagem:</h1>
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="fnome">Nome Completo:</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="fnome"
                  name="nome"
                  placeholder="Nome"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="ftel">Telefone:</label>
              </div>
              <div class="col-75">
                <input
                  type="tel"
                  id="ftel"
                  name="telefone"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="femail">Email:</label>
              </div>
              <div class="col-75">
                <input
                  type="email"
                  id="femail"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="msg">Mensagem:</label>
              </div>
              <div class="col-75">
                <textarea
                  id="msg"
                  name="msg"
                  placeholder="Escreva sua mensagem aqui..."
                  style="height: 200px"
                ></textarea>
              </div>
            </div>
            <br />
            <div class="row">
              <div class=" buttonSubmit">
                <button class="designBotao" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
#fale-conosco {
  background-color: transparent;
}

.col-50 {
  float: left;
  width: 50%;
}

.col-50#fale-conosco {
  margin-right: 20px;
}

.col-50#fale-conosco img,
.col-50#fale-conosco p {
  margin-left: 0;
}

img {
  vertical-align: middle;
  margin-left: 4em;
}

* {
  box-sizing: border-box;
}

label {
  display: inline-block;
  padding: 12px 12px 12px 8px;
}

button[type="submit"] {
  cursor: pointer;
  padding: 0.5em 1em;
}

form {
  gap: 0.5em 1em;
  margin-bottom: 0.5em;
  padding-left: 4em;
}

.col-75 {
  float: left;
  margin-top: 6px;
  width: 75%;
}

.row::after {
  display: table;
  clear: both;
  content: "";
}
.designBotao { 
  background-color: #55AE4D;
  padding: 8px 16px; 
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

.buttonSubmit {
  display: flex;
  justify-content: flex-end;
  padding-right: 310px; 
  width: 100%;
  padding-bottom: 10px;
}


.designBotao:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
  color: #168c1b;
}
.designBotao:active {
  transform: scale(0.98);
}

h1 {
  margin-top: 0;
  margin-right: 150px;
  margin-left: 60px;
}

p {
  display: inline-block;
  margin-right: 150px;
  margin-left: 80px;
}
.banner {
  box-sizing: border-box;
  background-image: url("/instituto formiga + operacao natal(2022)(1).jpg");
  background-position: 50% 55%;
  background-size: cover;
  padding: 5%;
  width: 100%;
  text-align: center;
}

.banner h1 {
  margin: 0 auto;
  color: white;
  font-weight: bold;
}
</style>