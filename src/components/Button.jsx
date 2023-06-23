import React from "react";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";

function Button() {
  const pBtn = () => {
    alert("버튼을 만들어보세요");
  };

  const showPrompt = () => {
    const message = "어렵나요?";
    prompt(message);
  };

  return (
    <div>
      <GlobalStyle />
      <h1>Button</h1>
      <StBtnGroup>
        <StBtn>
          <StAlertBtn bordercolor="#78c8fa" color="black" onClick={pBtn}>
            Large Primary Button
          </StAlertBtn>
          <StMedium backgroundColor="#78c8fa" color="black" activeColor="#3fa7e8">
            Medium
          </StMedium>
          <StSmall backgroundColor="#78c8fa" color="black" activeColor="#3fa7e8">
            Small
          </StSmall>
        </StBtn>
        <StBtn>
          <StAlertBtn bordercolor="#fab1c6" color="#fa2d67" onClick={showPrompt}>
            Large Negative Button
          </StAlertBtn>
          <StMedium backgroundColor="#fab1c6" color="#fa2d67" activeColor="#f772a5">
            Medium
          </StMedium>
          <StSmall backgroundColor="#fab1c6" color="#fa2d67" activeColor="#f772a5">
            Small
          </StSmall>
        </StBtn>
      </StBtnGroup>
    </div>
  );
}

export default Button;

const StBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StAlertBtn = styled.button`
  color: ${(props) => props.color};
  height: 50px;
  width: 200px;
  border: 3px solid ${(props) => props.bordercolor};
  background-color: white;
  font-weight: 600;
`;

const StMedium = styled.button`
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 45px;
  width: 130px;
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;

const StSmall = styled.button`
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 40px;
  width: 100px;
  &:active {
    background-color: ${(props) => props.activeColor};
  }
`;
