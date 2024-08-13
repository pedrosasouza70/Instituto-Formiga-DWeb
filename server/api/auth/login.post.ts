import { z } from "zod";
import { Usuario } from "~/server/models/usuario";
import bcrypt from "bcryptjs";
import { generateToken } from "~/server/utils/jwt";

const schema = z.object({
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
      cause: result.error.issues,
    });
  }

  const { email, senha } = result.data;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    throw createError({
      status: 404,
      message: "Usuário não encontrado",
    });
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    throw createError({
      status: 401,
      message: "Senha inválida",
    });
  }

  const accessToken = generateToken({ id: usuario.id, email: usuario.email });

  return {
    accessToken,
  };
});
