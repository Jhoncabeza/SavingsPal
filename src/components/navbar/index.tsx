import { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();

  useEffect(() => {
    const savedIndex = localStorage.getItem("selectedItem");

    if (savedIndex !== null) {
      setSelectedItem(parseInt(savedIndex, 10));
    } else {
      // If no saved index, find the current path in menuItems and set it
      const currentIndex = menuItems.findIndex(
        (item) => item.path === location.pathname
      );
      if (currentIndex !== -1) {
        setSelectedItem(currentIndex);
      }
    }
  }, [location.pathname]);

  const handleListItemClick = (index: number, path: string) => {
    setSelectedItem(index);
    localStorage.setItem("selectedItem", index.toString());
    navigate(path);
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
