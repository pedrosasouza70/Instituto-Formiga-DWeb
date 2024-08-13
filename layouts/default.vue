<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const menuMobileAberto = ref(false);
const route = useRoute();

onMounted(() => {
  function checkKeyPress(event: KeyboardEvent) {
    if (event.ctrlKey && event.altKey && event.key === "a") {
      window.location.href = "/login";
    }
  }

  document.addEventListener("keydown", checkKeyPress);
});

function mudarFonte(pixels: number) {
  const html = document.querySelector("html")!;
  const tamanho = window.getComputedStyle(html).fontSize;
  const novoTamanho = parseFloat(tamanho) + pixels;

  html.style.fontSize = `${novoTamanho}px`;
}

function trocarContraste() {
  const html = document.querySelector("html")!;
  html.classList.toggle("alto-contraste");
}

function abrirMenuMobile() {
  menuMobileAberto.value = true;
}

function fecharMenuMobile() {
  menuMobileAberto.value = false;
}

const isActiveRoute = (path: string) => {
  console.log("Rota atual:", route.path);
  return route.path === path;
};
</script>

<template>
  <div class="layout-principal">
    <nav>
      <div class="logo">
        <NuxtLink to="/">
          <img
            class="logo"
            src="~/assets/img/logo_instituto_formiga.png"
            alt="logo do instituto formiga"
          />
        </NuxtLink>
      </div>
      <div class="opcoes-acessibilidade">
        <button @click="mudarFonte(-2)" aria-label="Diminuir tamanho da fonte">
          A-
        </button>
        |
        <button @click="mudarFonte(2)" aria-label="Aumentar tamanho da fonte">
          A+
        </button>
        |
        <div role="radiogroup" aria-label="Configurações de contraste">
          <label>
            <input
              type="checkbox"
              @change="trocarContraste"
              aria-checked="false"
              aria-label="Alto Contraste"
            />
            Alto Contraste
          </label>
        </div>
      </div>
      <div
        @click="fecharMenuMobile"
        role="button"
        aria-label="Fechar menu mobile ao clicar fora"
        v-if="menuMobileAberto"
        class="mobile-menu-overlay"
      ></div>
      <ul
        :class="{ expanded: menuMobileAberto }"
        @click="fecharMenuMobile"
        role="menubar"
        aria-label="Menu principal"
      >
        <li role="none">
          <NuxtLink
            to="/"
            :class="{ active: isActiveRoute('/') }"
            :aria-current="isActiveRoute('/') ? 'page' : null"
            >Início</NuxtLink
          >
        </li>
        <li role="none">
          <NuxtLink
            to="/quem-somos"
            :class="{ active: isActiveRoute('/quem-somos') }"
            :aria-current="isActiveRoute('/quem-somos') ? 'page' : null"
            >Quem somos</NuxtLink
          >
        </li>
        <li role="none">
          <NuxtLink
            to="/acoes"
            :class="{ active: isActiveRoute('/acoes') }"
            :aria-current="isActiveRoute('/acoes') ? 'page' : null"
            >Ações</NuxtLink
          >
        </li>
        <li role="none">
          <NuxtLink
            to="/como-ajudar"
            :class="{ active: isActiveRoute('/como-ajudar') }"
            :aria-current="isActiveRoute('/como-ajudar') ? 'page' : null"
            >Como ajudar</NuxtLink
          >
        </li>
        <li role="none">
          <NuxtLink
            to="/contato"
            :class="{ active: isActiveRoute('/contato') }"
            :aria-current="isActiveRoute('/contato') ? 'page' : null"
            >Contato</NuxtLink
          >
        </li>
      </ul>

      <div class="mobile-menu-icon" @click="abrirMenuMobile">
        <button class="hamburguer" aria-label="Abrir menu móvel">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </nav>
    <div class="conteudo">
      <slot />
    </div>
    <footer>
      <section>
        <h2>Institucional</h2>
        <ul>
          <li><NuxtLink to="/">INÍCIO</NuxtLink></li>
          <li><NuxtLink to="/quem-somos">QUEM SOMOS</NuxtLink></li>
          <li><NuxtLink to="/acoes">AÇÕES</NuxtLink></li>
          <li><NuxtLink to="/como-ajudar">COMO AJUDAR</NuxtLink></li>
          <li><NuxtLink to="/contato">CONTATO</NuxtLink></li>
        </ul>
      </section>
      <section>
        <h2>Fale conosco</h2>
        <ul>
          <li>
            <NuxtLink to="https://wa.me/55163372-9132">
              <img src="/icon telefone.png" alt="Ícone de telefone" />
              +55 (16) 3372-9132
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="mailto:ongformigaverde@gmail.com">
              <span></span>
              <img src="/icon email.png" alt="Ícone de email" />
              ongformigaverde@gmail.com
            </NuxtLink>
          </li>
          <li>
            <img src="/icon localizacao.png" alt="Ícone de localização" />
            Rua Professor Péricles Soares, 406 Damha II, São Carlos (SP),
            13563-050
          </li>
        </ul>
      </section>
      <section>
        <h2>Redes sociais</h2>
        <ul>
          <li>logo do face</li>
          <li>logo do insta</li>
        </ul>
      </section>
      <img
        class="logo"
        src="~/assets/img/logo_instituto_formiga.png"
        alt="logo do instituto formiga"
      />
    </footer>
  </div>
</template>

<style scoped>
.layout-principal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

nav {
  display: grid;
  position: sticky;
  top: 0;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 6fr 1fr;
  column-gap: 1rem;
  align-items: center;
  z-index: 100;
  background-color: var(--nav-bar-bg-color);
  width: 100%;
  color: var(--nav-bar-text-color);
  --link-color: var(--nav-bar-link-color);
}

.logo {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  align-self: start;
  justify-self: start;
  width: 8em;
}

.opcoes-acessibilidade {
  display: flex;
  grid-row: 1 / 2;
  grid-column: 2 / 4;
  align-items: center;
  justify-self: end;
  padding-right: 1rem;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  grid-row: 2 / 3;
  grid-column: 2 / 4;
  justify-content: space-around;
}

.hamburguer {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.hamburguer div {
  border-radius: 5px;
  background-color: black;
  width: 3em;
  height: 0.5em;
}

ul :deep(a) {
  color: var(--link-color);
  text-decoration: none;
}

ul :deep(a:focus) {
  outline: 1px solid var(--link-color);
}

nav ul :deep(a) {
  font-weight: bold;
  text-transform: uppercase;
}

nav ul :deep(a.active) {
  color: #008000;
}

.mobile-menu-icon {
  display: none;
}

div.conteudo {
  color: white;
}

footer {
  display: flex;
  justify-content: space-around;
  background-color: var(--footer-bg-color);
  padding-bottom: 1rem;
  color: var(--footer-text-color);
  font-size: 0.8rem;
  --link-color: var(--footer-text-color);
}

footer ul {
  flex-direction: column;
  gap: 0.5em;
}

footer ul img {
  height: 1em;
}

footer .logo {
  align-self: center;
  border-radius: 1em;
}

@media screen and (max-width: 600px) {
  nav {
    grid-template-rows: 3em 1fr;
    grid-template-columns: 1fr 1fr;
  }

  nav .logo {
    align-self: center;
    width: min(100%, 8em);
  }

  .opcoes-acessibilidade {
    grid-row: 1 / 2;
    grid-column: 2 / 4;
  }

  .mobile-menu-icon {
    display: block;
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    justify-self: end;
  }
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  nav ul.expanded {
    position: fixed;
    top: 0;
    left: 0;
    align-items: stretch;
    gap: 1em;
    z-index: 99;
    background-color: var(--nav-bar-bg-color);
    padding: 1em;
    width: 100%;
  }

  nav ul {
    display: flex;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    flex-direction: column;
  }

  nav ul a {
    display: none;
  }

  nav ul a[aria-current] {
    display: block;
  }

  nav ul.expanded {
    position: fixed;
    top: 0;
    left: 0;
    align-items: stretch;
    gap: 1em;
    z-index: 100;
    background-color: var(--nav-bar-bg-color);
    padding: 1em;
    width: 100%;
  }

  nav ul.expanded a {
    display: block;
  }

  footer {
    flex-direction: column;
    gap: 1em;
    padding: 1em;
  }
}
</style>
