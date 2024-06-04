export interface ILoand {
  idPrestamo: number;
  valorPrestamo: number;
  tasaInteres: number;
  plazoPago: number;
  valorMensual: number;
  fecha: string;
  estadoPago: string;
  cedula: string;
  observaciones: string;
  nombre: string;
  apellido: string;
}

export interface ILoandFormData {
  idPrestamo: number;
  valorPrestamo: number;
  tasaInteres: number;
  plazoPago: number;
  valorMensual: number;
  fecha: string;
  estadoPago: string;
  cedula: string;
  observaciones?: string;
  nombre: string;
  apellido: string;
}

export interface IUserState {
  cedula: number;
  estado: boolean;
}
