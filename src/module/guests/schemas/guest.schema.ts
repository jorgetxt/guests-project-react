import { Department } from "../../departments/schemas/department.schema";

export interface GuestResponse {
  id?: number;
  cedula: string;
  date: Date;
  department: Department;
  firstname: string;
  lastname: string;
  // hour: string;
  note: string;
  reason: string;
  registerDate: Date;
  status: string;
}

export interface Guest {
  id?: number;
  cedula: string;
  date: Date;
  departmentId: number;
  firstname: string;
  lastname: string;
  // hour: string;
  note: string;
  reason: string;
  registerDate: Date;
  status: string;
}

export interface GuestUpdate {
  id: number;
  status: string;
  note: string;
}
