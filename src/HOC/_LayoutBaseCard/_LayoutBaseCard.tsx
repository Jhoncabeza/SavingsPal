import { FC } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar";
import { StyledMain, StyledRoot } from "./styles/styles";

const _LayoutCard: FC = () => {
  return (
    <StyledRoot>
      <Navbar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledRoot>
  );
};

export default _LayoutCard;
