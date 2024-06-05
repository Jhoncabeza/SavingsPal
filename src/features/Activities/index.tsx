import Datatable from "../../components/common/table";
import { IColumn, IRow } from "../../types";

const ActivitiesView = () => {
  const columns: IColumn[] = [
    { id: "ubicacion", label: "Ubicación", type: "string" },
    { id: "hora", label: "Hora", type: "time" },
    { id: "fecha", label: "Fecha", type: "date" },
    { id: "ganancias", label: "Ganancias", type: "number" },
    { id: "descripcion", label: "Descripción", type: "string" },
  ];

  return (
    <Datatable
      title={"Actividades"}
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

export default ActivitiesView;
