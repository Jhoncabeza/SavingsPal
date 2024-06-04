import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  width: "60%",
  margin: "0 0 2% 0",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#DA5A51",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#DA5A51",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DA5A51",
    },
  },
});

const SearchBar: React.FC = () => {
  return (
    <CustomTextField
      variant="outlined"
      placeholder="Búsqueda..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#DA5A51" }} />
          </InputAdornment>
        ),
        inputProps: {
          style: {
            color: "#DA5A51",
            marginLeft: "10px",
            fontWeight: "lighter",
          },
        },
      }}
    />
  );
};

export default SearchBar;
