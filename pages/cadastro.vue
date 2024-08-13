<script setup>
const { signUp } = useAuth();

const nome = ref("");
const email = ref("");

const senha = ref("");
const senhaConfirmada = ref("");

async function cadastrar() {
  if (senha.value !== senhaConfirmada.value) {
    alert("as senhas não são iguais");
    return;
  }

  await signUp(
    {
      nome: nome.value,
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
        <h1>Cadastro</h1>
        <form class="registerData">
          <label>Nome</label>
          <input
            type="text"
            id="nomeRegister"
            name="nomeRegister"
            placeholder="Nome e sobrenome"
            v-model="nome"
          />
          <label>E-mail</label>
          <input
            type="text"
            id="emailRegister"
            name="emailRegister"
            placeholder="E-mail"
            v-model="email"
          />
          <label>Senha</label>
          <input
            type="password"
            id="passwordRegister"
            name="passwordRegister"
            placeholder="Senha"
            v-model="senha"
          />
          <label>Confirme sua senha</label>
          <input
            type="password"
            id="passwordRegister"
            name="passwordRegister"
            placeholder="Senha"
            v-model="senhaConfirmada"
          />
        </form>
        <div class="confirm">
          <button type="button" class="designBotao" @click="cadastrar">
            Registrar-se
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
  padding: 1.5rem;
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

.registerData {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.registerData input {
  width: 100%;
  max-width: 20rem;
}

.confirm {
  display: flex;
  justify-content: center;
  padding-top: 1em;
  width: 100%;
}

.designBotao {
  background-color: #55ae4d;
  padding: 10px 110px;

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
