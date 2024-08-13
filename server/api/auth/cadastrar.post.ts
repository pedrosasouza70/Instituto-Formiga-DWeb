import { z } from "zod";
import { Usuario } from "~/server/models/usuario";
import { generateToken } from "~/server/utils/jwt";

const schema = z.object({
  nome: z.string().trim().min(3),
  email: z.string().email(),
  senha: z.string().trim().min(8),
});

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    schema.safeParse(body),
  );

  if (result.error) {
    throw createError({
      status: 400,
      data: result.error.issues,
    });
  }

  const { nome, email, senha } = result.data;

  const existemAdmins = await Usuario.findOne({ admin: true });
  const usuario = await Usuario.findOne({ email });

  if (usuario) {
    throw createError({
      status: 409,
      message: "Email já cadastrado",
    });
  }

  // não é necessário encriptar a senha, pois o esquema
  // definido já faz isso automaticamente
  const doc = await Usuario.create({
    nome,
    email,
    senha,
    // forma ruim de criar o primeiro admin,
    // mas por enquanto serve
    admin: !existemAdmins,
  });

  const accessToken = generateToken({ id: doc.id, email: doc.email });

  setResponseStatus(event, 201);

  return {
    accessToken,
  };
});
