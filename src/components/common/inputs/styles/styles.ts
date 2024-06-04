import { Select, SelectProps, TextField } from "@mui/material";
import { styled } from "styled-components";

export const CustomTextField = styled(TextField)({
  width: "100%",
  margin: "0 0 2% 0",
  "& .MuiInputBase-input": {
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#DA5A51",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "#DA5A51",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#DA5A51",
    },
  },
});
