// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: "build",
    strict: true,
  },
  css: ["~/assets/main.css"],
  googleFonts: {
    families: {
      // TODO: remover partes desnecessárias da fonte
      "Open Sans": true,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
    },
    baseURL: "/",
  },
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI,
    authSecret: process.env.AUTH_SECRET,
  },
  auth: {
    baseURL: "/api/auth",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        signUp: { path: "/cadastrar", method: "post" },
        getSession: { path: "/session", method: "get" },
      },
      token: { signInResponseTokenPointer: "/accessToken" },
    },
  },
  modules: ["@nuxtjs/google-fonts", "@sidebase/nuxt-auth"],
});
