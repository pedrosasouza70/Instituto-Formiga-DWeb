import {
  type DocumentoPatrocinador,
  Patrocinador,
} from "~/server/models/patrocinador";

export default defineEventHandler(
  async (): Promise<{ patrocinadores: DocumentoPatrocinador[] }> => {
    const patrocinadores = await Patrocinador.find();

    return {
      patrocinadores,
    };
  },
);
