import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Logo,
  LogoContainer,
  StyledButtonContainer,
  StyledButtonListItem,
  StyledButtonListItemIcon,
  StyledButtonListItemText,
  StyledDivider,
  StyledDrawer,
  StyledListContainer,
  StyledListItem,
  StyledListItemText,
} from "./styles/styles";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Usuarios", path: "/Users" },
  { text: "Préstamos", path: "/Loans" },
  { text: "Multas", path: "/Fines" },
  { text: "Aportes", path: "/Contributions" },
  { text: "Actividades", path: "/Activities" },
  { text: "Pagos", path: "/Payments" },
  { text: "Estadísticas", path: "/Statistics" },
];

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const navigate = useNavigate();

  const handleListItemClick = (_index: number, _path: string) => {
    setSelectedItem(_index);
    navigate(_path);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <LogoContainer>
        <Logo alt="SavingsPal" src="logo.png" />
      </LogoContainer>
      <StyledListContainer>
        {menuItems.map((item, index) => (
          <StyledListItem
            key={index}
            selected={selectedItem === index}
            onClick={() => handleListItemClick(index, item.path)}
          >
            <StyledListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </StyledListContainer>

      <StyledDivider />

      <StyledButtonContainer>
        <StyledButtonListItem key="logout" onClick={handleLogout}>
          <StyledButtonListItemIcon>
            <ExitToAppIcon />
          </StyledButtonListItemIcon>
          <StyledButtonListItemText primary="Cerrar Sesión" />
        </StyledButtonListItem>
      </StyledButtonContainer>
    </StyledDrawer>
  );
};

export default Navbar;
