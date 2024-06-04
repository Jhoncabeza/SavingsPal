export interface IUser {
  id: number;
  nombres: string;
  apellidos: string;
  cedula: number;
  correo: string;
  numerodecuenta: string;
  banco: string;
  tipodecuenta: string;
  fecha: string;
  estado: boolean;
}

export interface IUserFormData {
  cedula: number;
  nombre: string;
  apellidos: string;
  fechaNacimiento: string | null;
  correoElectronico: string;
  estado: boolean;
  nombreBanco: string;
  numeroCuenta: number;
  idTipoCuenta: string;
}

export interface IUserState {
  cedula: number;
  estado: boolean;
}
