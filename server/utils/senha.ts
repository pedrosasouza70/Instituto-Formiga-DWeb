import bcrypt from "bcryptjs";

export function hashSenha(senha: string) {
  return bcrypt.hash(senha, 8);
}
