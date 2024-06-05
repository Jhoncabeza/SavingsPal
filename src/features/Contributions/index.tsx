import Datatable from "../../components/common/table";
import { IColumn, IRow } from "../../types";

const ContributionsView = () => {
  const columns: IColumn[] = [
    { id: "socio contribuyente", label: "Socio Contribuyente", type: "string" },
    { id: "valor", label: "Valor", type: "number" },
    { id: "fecha", label: "Fecha", type: "date" },
  ];
  return (
    <Datatable
      title="Aportes"
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

export default ContributionsView;
