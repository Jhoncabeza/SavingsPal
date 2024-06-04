export interface IColumn {
  id: string;
  label: string;
  type?: string;
  handleSwitchState?: (cedula: number, value: boolean) => void;
  handleRowClick?: (row: IRow) => void;
}

export interface IRow {
  [key: string]: string | number | boolean;
}
