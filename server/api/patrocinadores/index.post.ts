import { z } from "zod";
import { Patrocinador } from "~/server/models/patrocinador";

const schema = z.object({
  nome: z.string().trim().min(3),
  logo: z.string().base64(),
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
      message: "Dados de patrocinador inválidos",
      data: result.error.issues,
    });
  }

  const { nome } = result.data;
  const logo = Buffer.from(result.data.logo, "base64");

  let documento = await Patrocinador.findOne({ nome });

  if (documento) {
    await Patrocinador.updateOne({ nome }, { logo });
  } else {
    await Patrocinador.create({ nome, logo });
  }

  setResponseStatus(event, 201);
});
