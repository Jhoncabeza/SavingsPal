export interface IPayment {
  nombre: string;
  descripcion: string;
  valorMulta: number;
  fecha: string;
  estado?: boolean;
  cedula: number;
}
