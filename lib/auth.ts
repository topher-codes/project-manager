import bcrypt from "bcrypt";

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
