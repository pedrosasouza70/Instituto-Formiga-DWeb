import * as fs from "node:fs";
import { randomBytes } from "node:crypto";

// esse script gera um segredo utilizado para
// assinar os tokens JWT
// trocar o segredo no arquivo .env
// torna todos os JWTs inválidos
const secret = randomBytes(64).toString("hex");

fs.appendFileSync(".env", `\nAUTH_SECRET="${secret}"\n`);
