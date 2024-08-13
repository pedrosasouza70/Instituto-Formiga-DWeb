import * as bcrypt from "bcryptjs";
import mongoose, { type HydratedDocument } from "mongoose";
import { hashSenha } from "../utils/senha";

export interface UsuarioDados {
  nome: string;
  email: string;
  senha: string;
  admin: boolean;
}

export type UsuarioDocumento = HydratedDocument<UsuarioDados>;

const usuarioSchema = new mongoose.Schema<UsuarioDados>({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
    minlength: 8,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

// garante que todas as senhas são criptografadas antes de serem salvas no banco de dados
usuarioSchema.pre("save", async function (next) {
  if (this.isModified("senha")) {
    this.senha = await hashSenha(this.senha);
  }

  next();
});

export const Usuario = mongoose.model<UsuarioDados>("Usuario", usuarioSchema);
