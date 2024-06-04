import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { ListItemProps as MuiListItemProps } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export const StyledDrawer = styled(Drawer)`
  width: 15%;
  & .MuiDrawer-paper {
    width: 15%;
    box-sizing: border-box;
    background-color: #000231;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 130px;
  width: 140px;
`;

interface ListItemProps extends MuiListItemProps {
  selected?: boolean;
}

export const StyledListItem = styled(ListItem)<ListItemProps>`
  display: flex;
  height: 13%;
  justify-content: center;
  position: relative;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#755f5f")};
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? "#DA5A51 !important" : "transparent !important"};
  &:hover {
    background-color: ${(props) => (props.selected ? "#DA5A51" : "#001f3f")};
    color: #ffffff;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 4px;
    height: 60%;
    background-color: #ffffff;
    border-radius: 10px;
    display: ${(props) => (props.selected ? "block" : "none")};
  }
`;

export const StyledListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-size: small;
  }
`;

export const StyledButtonListItem = styled(ListItem)<ListItemProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  background-color: #414355;

  &:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #2c2e3e;
  }
`;

export const StyledButtonListItemIcon = styled(ListItemIcon)`
  && {
    color: white;
    min-width: auto;
    margin-right: 15px;
  }
`;

export const StyledButtonListItemText = styled(ListItemText)`
  color: white;
  border-radius: 10px;
  & .MuiListItemText-primary {
    font-size: small;
  }
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 40%;
    background-color: #757575;
  }
`;
