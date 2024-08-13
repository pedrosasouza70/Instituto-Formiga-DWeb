<script setup lang="ts">
const { data } = useFetch("/api/patrocinadores");

data.value?.patrocinadores.forEach((patrocinador) => {
  console.log(patrocinador);
});
</script>

<template>
  <main>
    <h1>Boas vindas ao instituto formiga:</h1>

    <p>
      O Instituto Formiga, inicialmente uma extensão da ONG Formiga Verde,
      nasceu em 2007 com o propósito de preencher uma lacuna na vida das
      crianças e jovens do bairro Santa Felícia em São Carlos, SP. Desde então,
      tem evoluído para abraçar uma variedade de atividades, desde esportes até
      programas educacionais e de assistência social. Em 2024, o Instituto
      continua sua missão de promover o bem-estar e o desenvolvimento integral
      da comunidade, agora ampliando sua atuação e acolhendo novas iniciativas e
      parcerias para melhor atender às necessidades em constante mudança.
    </p>
    <picture>
      <img
        src="/curso auxiliar de escritório (2018).jpg"
        alt="Foto de um grupo de jovens na sede da ONG Formiga Verde e, ao centro, há um homem sentado."
      />
    </picture>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 3fr;
  column-gap: 1.5rem;
  padding: 0 1.5rem;
}

picture {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
}
img {
  max-width: 100%;
}

h1 {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}

p {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

@media screen and (max-width: 600px) {
  main {
    display: flex;
    flex-direction: column;
  }
}
</style>
