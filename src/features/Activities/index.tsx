import Datatable from "../../components/common/table";
import { IRow } from "../../types";

const ActivitiesView = () => {
  return (
    <Datatable
      title={"Actividades"}
      columns={[]}
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
