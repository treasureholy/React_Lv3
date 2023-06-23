import React, { useState } from "react";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";

function Modal() {
  const [isModalA, setIsModalA] = useState(false);
  const [isModalB, setIsModalB] = useState(false);

  const openModalA = () => {
    setIsModalA(true);
  };

  const closeModalA = (event) => {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Close") {
      setIsModalA(false);
    }
  };

  const openModalB = () => {
    setIsModalB(true);
  };

  const closeModalB = (event) => {
    if (event.target === event.currentTarget) {
      setIsModalB(false);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <h1>Modal</h1>
      <StContainer>
        <div>
          <StBtnA onClick={openModalA}>open modal</StBtnA>
        </div>
        <div>
          <StBtnB onClick={openModalB}>open modal</StBtnB>
        </div>
      </StContainer>
      {isModalA && (
        <StModalOverlay onClick={closeModalA}>
          <StModalContent>
            <h2>open modal</h2>
            <p>Close 버튼을 눌러야 모달이 닫혀요.</p>
            <StBtn
              backgroundColor="#71ba63"
              activeColor="#558a4a"
              onClick={closeModalA}
            >
              Close
            </StBtn>
            <StBtn backgroundColor="#c4b7ba" activeColor="#7d7f7d">
              ok
            </StBtn>
          </StModalContent>
        </StModalOverlay>
      )}
      {isModalB && (
        <StModalOverlay onClick={closeModalB}>
          <StModalContent>
            <h2>open modal</h2>
            <p>Close 버튼을 누르거나 외부 영역을 누르면 모달이 닫혀요.</p>
            <StBtn
              backgroundColor="#f29da6"
              activeColor="#fa4b5c"
              onClick={closeModalB}
            >
              Close
            </StBtn>
          </StModalContent>
        </StModalOverlay>
      )}
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

const StModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 97, 97, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.61);
`;

const StBtn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  color: black;
  height: 30px;
  width: 60px;
  margin-right: 10px;
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;
