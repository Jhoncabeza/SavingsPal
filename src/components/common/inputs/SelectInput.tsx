import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";
import React from "react";
const CustomSelect = styled(Select)({
  width: "100%",
  height: "41px",
  "&.MuiInputBase-root": {
    borderRadius: 14,
    borderColor: "#DA5A51 !important",
    "&:hover": {
      borderColor: "#DA5A51 !important",
    },
    "&.Mui-focused": {
      borderColor: "#DA5A51 !important",
    },
  },
  "&.MuiInputBase-input": {
    borderRadius: 14,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #DA5A51",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: "box-shadow",
    "&:hover": {
      borderColor: "#DA5A51", // Cambia el color del borde del icono en hover
    },
    "&:focus": {
      borderColor: "#DA5A51 !important", // Cambia el color del borde del icono cuando está enfocado
    },
  },
  "&.MuiSelect-icon": {
    color: "#DA5A51 !important", // Cambia el color del icono
  },
});

interface SelectInputProps {
  labelId: string;
  id: string;
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: string[];
  isDisabled: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  id,
  label,
  labelId,
  value,
  onChange,
  isDisabled,
}) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange(event);
  };

  return (
    <CustomSelect
      labelId={labelId}
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
      disabled={isDisabled}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default SelectInput;
