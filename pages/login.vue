<script setup>
const { signIn } = useAuth();

const email = ref("");
const senha = ref("");

async function fazerLogin() {
  console.log(email.value, senha.value);
  await signIn(
    {
      email: email.value,
      senha: senha.value,
    },
    {
      redirect: false,
    },
  );

  await navigateTo("/pageadmin");
}
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Admin Log In</h1>
        <form class="LoginData">
          <label>Usuário</label>
          <input
            type="text"
            id="emailLogin"
            name="emailLogin"
            placeholder="E-mail"
            v-model="email"
          />
          <label>Senha</label>
          <input
            type="password"
            id="senhaLogin"
            name="senhaLogin"
            placeholder="Senha"
            v-model="senha"
          />
          <div class="linksContainer">
            <div class="leftLinks">
              <a href="cadastro" class="cadastro">Cadastro</a>
            </div>
            <div class="rightLinks">
              <a href="recuperarSenha" class="forgotPassword"
                >Esqueci minha senha</a
              >
            </div>
          </div>
        </form>
        <div class="confirm">
          <button type="button" class="designBotao" @click="fazerLogin">
            Login
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3% auto;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 2rem;
  width: 23rem;
  max-width: 37.5rem;
  min-height: auto;
  overflow: auto;
  color: black;
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

.LoginData {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.LoginData input {
  width: 100%;
  max-width: 20rem;
}

.linksContainer {
  display: flex;
  justify-content: space-between;
}

.leftLinks {
  text-align: left;
}

.rightLinks {
  text-align: right;
}
.forgotPassword {
  padding-right: 15px;
}
.forgotPassword,
.cadastro {
  color: #093d0c;
  font-size: 0.8rem;
  text-decoration: none;
}

.forgotPassword:hover,
.cadastro:hover {
  text-decoration: underline;
}

.confirm {
  display: flex;
  justify-content: center;
  padding-top: 1em;
  width: 100%;
}

.designBotao {
  background-color: #55ae4d;
  padding: 10px 140px;
  color: black;
  font-weight: 400;
  text-decoration: none;
}

.designBotao:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #093d0c;
  color: #f5f5f5;
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
