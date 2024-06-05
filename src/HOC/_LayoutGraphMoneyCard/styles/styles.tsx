import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 30%;
  position: relative;
  background-color: white;
  border-radius: 30px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextAbove = styled.div`
  font-size: 10px;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bolder;
  color: #000;
`;

export const FixedText = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 16px;
  color: gray;
`;
