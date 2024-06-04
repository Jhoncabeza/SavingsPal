import { IColumn, IRow } from "../../../types";
import DataTableContainer from "./DataTableContainer";
import DataTableHeader from "./DataTableHeader";
import { StyledPaper } from "./styles/styles";

interface IDataTableContainer {
  title: string;
  columns: IColumn[];
  data: IRow[];
  isNewCreate?: boolean;
  handleCreateUserClick: () => void;
  handleRowClick: (row: IRow) => void;
}

const Datatable = ({
  title,
  columns,
  data,
  handleCreateUserClick,
  handleRowClick,
  isNewCreate,
}: IDataTableContainer) => {
  return (
    <StyledPaper>
      <DataTableHeader
        title={title}
        handleCreateUserClick={handleCreateUserClick}
        isNewCreate={isNewCreate}
      />
      <DataTableContainer
        columns={columns}
        data={data}
        title={title}
        handleRowClick={handleRowClick}
      />
    </StyledPaper>
  );
};

export default Datatable;
