import styled from "styled-components";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)`
  background-color: #da5a51 !important;
  color: #fff !important;
  border-radius: 10px !important;
  text-transform: none !important;
  &:hover {
    background-color: #c04a42 !important;
    border-radius: 10px !important;
  }
`;

const SecondaryButton = styled(Button)`
  color: #da5a51 !important;
  border: 1px solid #da5a51 !important;
  border-radius: 10px !important;
  text-transform: none !important;
`;
export { PrimaryButton, SecondaryButton };
