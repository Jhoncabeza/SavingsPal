import Datatable from "../../components/common/table";
import { IColumn, IRow } from "../../types";

const FineView = () => {
  const columns: IColumn[] = [
    { id: "tipoMulta", label: "Tipo de multa", type: "string" },
    { id: "descripcion", label: "Descripción", type: "string" },
    { id: "valor", label: "Valor", type: "number" },
    { id: "responsable", label: "Responsable", type: "string" },
    { id: "fechaRegistro", label: "Fecha de registro", type: "date" },
    { id: "estado", label: "Estado", type: "string" },
  ];
  return (
    <Datatable
      title="Multas"
      columns={columns}
      data={[]}
      handleCreateUserClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      handleRowClick={function (_row: IRow): void {
        throw new Error(_row.toString());
      }}
      isNewCreate={true}
    />
  );
};

export default FineView;
