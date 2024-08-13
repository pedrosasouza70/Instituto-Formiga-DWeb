<template>
  <main>
    <div class="banner">
      <h1>COMO O INSTITUTO FORMIGA FUNCIONA?</h1>
    </div>

    <div class="content">
      <p>
        A ONG Formiga Verde é uma organização sem fins lucrativos que opera na
        cidade de São Carlos, focada na Educação Não Formal e Proteção Social.
        Nosso objetivo é proporcionar uma educação completa para crianças e
        adolescentes, visando torná-los indivíduos autônomos e pensativos.
        Acreditamos que o entendimento e a valorização do próximo são
        fundamentais para promover mudanças sociais positivas.
      </p>
      <p>
        Atualmente, nossa organização é formada por membros da comunidade,
        voluntários e pelas próprias comunidades atendidas. Desenvolvemos
        projetos próprios e buscamos expandir continuamente nossa gama de
        atividades, visando sempre atender melhor às necessidades das pessoas
        que servimos.
      </p>
    </div>

    <h2>Quais ações são realizadas?</h2>

    <div class="content">
      <p>
        A ONG Formiga verde realiza muitos trabalhos voltados à comunidade por
        meio do trabalho colaborativo. Muitos desses trabalhos são voltados para
        a educação, garantindo o desenvolvimento integral de crianças e
        adolescentes atendidos por nós.
      </p>
    </div>

    <h3>Atividades Esportivas</h3>

    <div class="content image-right">
      <figure>
        <img
          src="/atletismo.jpg"
          alt="Foto de um grupo de crianças e adolescentes, algumas sentadas e outras em pé, em um evento de Atletismo da Nescau. Ao fundo, há um banner roxo e vermelho escrito atletismo e ao lado esta o logo da Nescal"
          class="rounded-image"
        />
        <figcaption>
          Fig 2. Imagem do Atletismo CEME/Formiga Verde participando da Liga
          Nescau em Ribeirão Preto (2024)
        </figcaption>
      </figure>

      <p>
        Sim, com esporte, alegria e diversão! Aprender não é sofrer, crescer é
        mais que deixar de ser pequeno e emancipar-se não é algo apenas e tão
        somente alcançado por contemplados que terminam seu doutorado. O
        esporte, se usado como “meio” e não como “fim”, torna-se um poderoso
        instrumento para educação e potencializa todo processo educacional do
        indivíduo, para o bem e, esta é a questão, também para o mal. Nossas
        modalidades são desenvolvidas com estes objetivos, prioritariamente
        educacionais, o que não nos impede de desenvolver algumas atividades com
        características de competição desportiva.
      </p>
    </div>

    <h3>Eventos de arrecadação</h3>

    <div class="content image-left">
      <figure>
        <img
          src="/eventos_arregadacao.jpg"
          alt="Foto de um homem com as mãos em cima de cestas básicas que estão em sua frente. Ao fundo, há uma mesa que contém uma árvore de Natal e ao lado, logo atrás do homem, há o banner da ONG Formiga Verde"
          class="rounded-image"
        />
        <figcaption>
          Fig 3. Recebimento de cestas básicas entregues pela Associação Legião
          da boa vontade. (2021)
        </figcaption>
      </figure>
      <p>
        Os eventos de arrecadação são fundamentais para a ONG Formiga Verde, não
        apenas para angariar recursos financeiros, mas também para promover
        conscientização, educação e engajamento comunitário em torno de questões
        ambientais e sociais. Cada evento não é apenas uma oportunidade de
        captação de recursos, mas também uma chance de fortalecer laços com a
        comunidade e celebrar o apoio contínuo dos doadores e voluntários. Esses
        eventos são marcos importantes na busca por um futuro mais justo,
        sustentável e inclusivo.
      </p>
    </div>

    <h3>Lazer e Recreação</h3>

    <div class="content image-right">
      <figure>
        <img
          src="/lazer.jpg"
          alt="Foto de um grupo de crianças e adolescentes comendo, sentados em volta de mesas em uma lanchonete"
          class="rounded-image"
        />
        <figcaption>Fig 4. Imagem da Recreação do Keppe (2022)</figcaption>
      </figure>
      <p>
        O lazer e a recreação desempenham um papel crucial na missão da ONG
        Formiga Verde. Utilizamos essas atividades como ferramentas educativas
        para promover o desenvolvimento integral dos jovens, estimulando a
        criatividade, a socialização e a aprendizagem de valores. Além disso,
        proporcionamos momentos de diversão e igualdade de acesso, contribuindo
        para a construção de uma sociedade mais inclusiva e justa. Em suma, o
        lazer e a recreação são fundamentais para o bem-estar e o crescimento
        pessoal dos nossos participantes.
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.banner {
  box-sizing: border-box;
  background-image: url("public/curso auxiliar de escritório (2018).jpg");
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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  text-align: justify;
}

.image-right {
  flex-direction: row;
  align-items: center;
}

.image-left {
  flex-direction: row-reverse;
  align-items: center;
}

.image-right figure,
.image-left figure {
  margin: 0 1rem;
  width: 45%;
}

.image-right p,
.image-left p {
  margin: 0 1rem;
  margin-bottom: 0.5rem;
  width: 50%;
  /* Reduzindo o espaço entre parágrafos */
}

h2 {
  width: 100%;
  color: white;
  text-align: center;
}

h {
  width: 100%;
  color: white;
  text-align: center;
}

figure img.rounded-image {
  border-radius: 10px;
  width: 100%;
  height: auto;
  /* Ajuste o raio de curvatura conforme necessário */
}

figcaption {
  text-align: center;
}

@media screen and (max-width: 600px) {
  .image-right figure,
  .image-left figure {
    width: 100%;
  }

  .image-right p,
  .image-left p {
    margin-bottom: 0.5rem;
    width: 100%;
    /* Reduzindo o espaço entre parágrafos em telas menores */
  }

  .content {
    flex-direction: column;
    box-sizing: border-box;
    padding: 1em;
  }
}
</style>
