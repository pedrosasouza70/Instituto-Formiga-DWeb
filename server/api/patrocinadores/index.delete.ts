import { z } from "zod";
import { Patrocinador } from "~/server/models/patrocinador";

const schema = z.object({
  nome: z.string().trim().min(3),
});

export default defineEventHandler(async (event) => {
  if (!event.context.usuario?.admin) {
    throw createError({
      status: 403,
      message: "Acesso negado",
    });
  }

  const result = await readValidatedBody(event, (body) =>
    schema.safeParse(body),
  );

  if (result.error) {
    throw createError({
      status: 400,
      message: "Faltam campos obrigatórios",
      data: result.error.issues,
    });
  }

  const { nome } = result.data;

  await Patrocinador.deleteOne({ nome });

  setResponseStatus(event, 204);
});
