import jwt from "jsonwebtoken";
import { Usuario } from "../models/usuario";

declare module "h3" {
  interface H3EventContext {
    usuario?: {
      id: string;
      nome: string;
      email: string;
      admin: boolean;
    };
  }
}

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, "Authorization");
  if (!authHeader) return;

  const [, token] = authHeader.split(" ");

  if (!token) return;

  const { authSecret } = useRuntimeConfig();

  let id: string;
  try {
    ({ id } = jwt.verify(token, authSecret) as any);
  } catch (e) {
    throw createError({
      message: "Token de login inválido",
      status: 401,
    });
  }

  const doc = await Usuario.findById(id);
  if (!doc) {
    throw createError({
      message: "Usuário não encontrado",
      status: 403,
    });
  }

  event.context.usuario = {
    id: doc.id,
    nome: doc.nome,
    email: doc.email,
    admin: doc.admin,
  };
});
