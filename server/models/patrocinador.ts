import mongoose, { Types } from "mongoose";

export interface DadosPatrocinador {
  nome: string;
  logo: Buffer;
}

export type DocumentoPatrocinador =
  mongoose.HydratedDocument<DadosPatrocinador>;

const patrocinadorSchema = new mongoose.Schema<DadosPatrocinador>({
  nome: {
    type: String,
    required: true,
  },
  logo: {
    type: Buffer,
    required: true,
  },
});

export const Patrocinador = mongoose.model<DadosPatrocinador>(
  "Patrocinador",
  patrocinadorSchema,
);
