export interface Guest {
  id?: number;
  cedula: string;
  date: Date;
  departamentId: number;
  firstname: string;
  lastname: string;
  // hour: string;
  note: string;
  reason: string;
  registerDate: Date;
  status: string;
}