import { object, string, date, number } from "yup";

export const guestSchema = object({
  firstname: string().required(),
  lastname: string().required(),
  cedula: string().required().length(10),
  date: date().required(),
  departamentId: number().min(1).required(),
  note: string(),
  // hour: string().required(),
  reason: string().required(),
  registerDate: date().required(),
  status: string().required(),
});

export const guestUpdateSchema = object({
  note: string(),
  status: string().required(),
});
