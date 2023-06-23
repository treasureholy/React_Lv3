import React from "react";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";

function Modal() {
  return (
    <div>
      <GlobalStyle />
      <h1>Modal</h1>
      <StContainer>
        <div>
          <StBtnA>open modal</StBtnA>
        </div>
        <div>
          <StBtnB>open modal</StBtnB>
        </div>
      </StContainer>
    </div>
  );
}

export default Modal;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StBtnA = styled.button`
  background-color: #71ba63;
  border: none;
  color: black;
  height: 40px;
  width: 100px;
  &:active {
    background-color: #558a4a;
  }
`;

const StBtnB = styled.button`
  color: #fa4b5c;
  height: 50px;
  width: 200px;
  border: 3px solid #f29da6;
  background-color: white;
  font-weight: 600;
`;
