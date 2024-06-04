import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  background-color: #000231 !important;
  font-weight: bold;
  min-width: 0px !important;
  border-radius: 100% !important;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #000231;
    color: #000231;
  }
`;

const StyledAddIcon = styled(AddIcon)`
  color: white;
  font-size: 20px;
`;

interface ICreateButton {
  handleCreateUserClick: () => void;
}

const CreateButton: React.FC<ICreateButton> = ({ handleCreateUserClick }) => {
  return (
    <Container>
      <StyledButton>
        <StyledAddIcon onClick={handleCreateUserClick} />
      </StyledButton>
    </Container>
  );
};

export default CreateButton;
