import { Patrocinador } from "~/server/models/patrocinador";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const nome = getRouterParam(event, "nome");

  getServerSession;
  const patrocinador = await Patrocinador.findOne({ nome });

  if (!patrocinador) {
    throw createError({
      status: 404,
      message: "Patrocinador não encontrado",
    });
  }

  return patrocinador.logo;
});
