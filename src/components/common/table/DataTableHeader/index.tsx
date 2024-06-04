import { Grid } from "@mui/material";
import { StyledTypography } from "./styles";
import SearchBar from "../../inputs/SearchBar";
import CreateButton from "../../buttons/CreateButton";

interface IDataTableHeader {
  title: string;
  isNewCreate?: boolean;
  handleCreateUserClick: () => void;
}

const DataTableHeader = ({
  title,
  handleCreateUserClick,
  isNewCreate,
}: IDataTableHeader) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledTypography variant="h5">{title}</StyledTypography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={4}></Grid>
          {isNewCreate && (
            <Grid item xs={2}>
              <CreateButton handleCreateUserClick={handleCreateUserClick} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DataTableHeader;
