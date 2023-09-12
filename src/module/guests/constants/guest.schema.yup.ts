import { object, string, date, number } from "yup";

export const guestSchema = object({
  firstname: string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastname: string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  cedula: string()
    .required()
    .length(10)
    .matches(/^\d+$/, "Solo digitos son permitidos"),
  date: date().required(),
  departmentId: number().min(1).required(),
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
