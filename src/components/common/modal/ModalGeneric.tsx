import React from "react";

// mui
import { Modal } from "@mui/material";
import { Box } from "@mui/material";

import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 
  40% {
    transform: scale(1);
  }
`;

const ModalContent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0s;
  }
`;

interface IModalGeneric {
  loading: boolean;
}

const ModalGeneric: React.FC<IModalGeneric> = ({ loading }) => {
  return (
    <>
      <Modal
        open={loading}
        aria-labelledby="loading-modal-title"
        aria-describedby="loading-modal-description"
      >
        <ModalContent>
          <LoaderContainer>
            <Dot color="#f44336" />
            <Dot color="#ffeb3b" />
            <Dot color="#2196f3" />
            <Dot color="#e91e63" />
          </LoaderContainer>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalGeneric;
