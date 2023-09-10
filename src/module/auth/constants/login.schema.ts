import { object, string } from "yup";

export const loginSchema = object({
  username: string().required(),
  password: string().required().min(4).max(12),
});
