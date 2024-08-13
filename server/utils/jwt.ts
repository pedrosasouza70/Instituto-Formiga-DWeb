import jwt from "jsonwebtoken";

export function generateToken(payload: { id: string; email: string }): string {
  const { authSecret } = useRuntimeConfig();
  return jwt.sign(payload, authSecret, {
    expiresIn: "1d",
  });
}
