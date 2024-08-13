import mongoose from "mongoose";

export default defineNitroPlugin(async (nitro) => {
  const { mongoUri } = useRuntimeConfig();

  await mongoose.connect(mongoUri);
  console.log("MongoDB conectado com sucesso!");

  nitro.hooks.hook("close", async () => {
    console.log("Fechando conexão com o MongoDB...");
    await mongoose.disconnect();
  });
});
