import { object, string, date, number } from "yup";

export const guestSchema = object({
  cedula: string().required().length(10),
  date: date().required(),
  departamentId: number().required(),
  firstname: string().required(),
  lastname: string().required(),
  note: string().required(),
  hour: string().required(),
  reason: string().required(),
  registerDate: date().required(),
  status: string().required(),
});
