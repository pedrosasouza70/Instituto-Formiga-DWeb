<script setup>
const { status } = useAuth();

if (status.value === "unauthenticated") {
  navigateTo("/login");
}

const nome = ref("");

const profilePicture = ref();

async function inserir() {}
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h1>Inserir Patrocinador</h1>
        <form
          class="inserir_patrocinador"
          @submit.prevent="inserirPatrocinador"
        >
          <label for="name">Nome do Patrocinador</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            required
          />

          <label for="profilePicture">Logo do Patrocinador</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            required
          />

          <div class="confirm">
            <button type="submit" class="designBotao">Inserir</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    inserirPatrocinador() {
      // Lógica para inserir patrocinador
      console.log("Patrocinador inserido");
    },
  },
};
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

.inserir_patrocinador {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.inserir_patrocinador input[type="text"],
.inserir_patrocinador input[type="file"] {
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
  transition: all 0.3s ease;
  border-radius: 10px;
  background-color: #55ae4d;
  padding: 10px 155px;
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

@media screen and (max-width: 48rem) {
  .container {
    max-width: 90%;
  }
}
</style>
