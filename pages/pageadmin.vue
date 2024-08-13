<script setup>
const { data } = await useFetch("/api/patrocinadores");
</script>

<template>
  <main>
    <h2>Administrador</h2>
    <div style="overflow-x: auto">
      <table>
        <th>Nome Patrocinadores</th>
        <th>
          <div class="row">
            <div class="button">
              <button class="designBotao" href="inserir-patrocinador">
                Inserir
              </button>
            </div>
          </div>
        </th>

        <tr v-for="patrocinador in data.patrocinadores">
          <td>{{ patrocinador.nome }}</td>
          <td>
            <a href="atualizar-patrocinador?nome={{patrocinador.nome}}"
              >Atualizar</a
            >
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th {
  padding: 8px;
  text-align: left;
}
td {
  padding: 8px;
  color: black;
  text-align: left;
}

.designBotao {
  transition: all 0.3s ease;
  border-radius: 5px;
  background-color: white;
  padding: 10px 20px;
  color: black;
  text-decoration: none;
}

.button {
  display: flex;
  justify-content: flex-start; /* Move o botão para a esquerda */
  width: 100%;
}

.designBotao:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #e0e0e0;
  color: #168c1b;
}
.designBotao:active {
  transform: scale(0.98);
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:nth-child(odd) {
  background-color: #c0c0c0;
}
</style>
