<template>
  <main>
    <div class="banner">
      <h1>SUA AJUDA FAZ DIFERENÇA</h1>
    </div>
    <h2>Faça a sua doação e ajude a manter a nossas atividades:</h2>

    <div id="corpo">
      <form id="cadastro">
        <label> Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
        />
        <label> Telefone: </label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          placeholder="(XX) XXXXX-XXXX"
        />
        <label> E-mail: </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
        />
        <label> Data de Nascimento: </label>
        <input
          type="text"
          id="datanascimento"
          name="datanascimento"
          placeholder="DD/MM/AAAA"
        />
        <label> CPF: </label>
        <input type="text" id="CPF" name="CPF" placeholder="CPF" />
        <label> Valor a Ser Doado: </label>
        <input type="text" id="dinheiro" name="dinheiro" placeholder="R$" />
        <div class="botaoprox">
          <a class="designBotao" href="como-ajudar2">Próxima etapa → </a>
        </div>
      </form>

      <div id="terceiraparte">
        <figure>
          <img
            width="auto"
            src="/instituto formiga + operacao natal(2022).jpg"
            alt="foto do criador da ong com vários alimentos para doação"
          />
          <figcaption>
            Fig 1. Recebimento de cestas básicas entregues pela Associação Legião
          da boa vontade. (2021)
          </figcaption>

          <div class="textoOng">

            <p>
              O Instituto Formiga é uma ONG dedicada a ajudar aqueles em
              necessidade. Sua doação pode fazer a diferença na vida de muitas
              pessoas. Junte-se a nós e contribua para um futuro melhor. Com sua
              ajuda, podemos continuar nossos projetos e alcançar mais pessoas.
            </p>
          </div>
        </figure>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
}

input {
  box-sizing: border-box;
}

h2 {
  margin-top: 0rem;
  margin-bottom: 0rem;
  padding-bottom: 20px;
  padding-left: 100px;
  color: white;
  text-align: left;
}
.banner {
  box-sizing: border-box;
  background-image: url(https://png.pngtree.com/background/20230425/original/pngtree-ants-standing-on-moss-leaves-picture-image_2471233.jpg);
  background-position: 50% 55%;
  background-size: cover;
  padding: 5%;
  width: 100%;
  text-align: center;
}
input {
  width: 100%;
}

.banner h1 {
  margin-right: 10%;
  margin-left: 10%;
  font-weight: bold;
}

#terceiraparte {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2%;
  padding-left: 5em;
}

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5em 1em;
    box-sizing: border-box;
    margin-bottom: 0.5em;
    padding-left: 6em;
  }

#corpo {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.textoOng {
  text-align: justify;
}

.botaoprox {
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-left: 2em;
  padding-top: 10px;
  width: 100%;
}

.designBotao {
  transition: all 0.3s ease;
  border-radius: 10px;
  font-weight: 400;
  background-color: #5cbe53;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
}

.designBotao:hover {
  transform: scale(1.05);
  background-color: #093d0c;
  color: white;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.designBotao:active {
  transform: scale(0.98);
}

figure img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  #cadastro {
    box-sizing: border-box;
    padding: 1em;
    width: 100%;
  }
  #corpo {
    display: flex;
    flex-direction: column;
  }
}
</style>
