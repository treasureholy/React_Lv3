import React, { useState } from "react";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (name === "" || price === "") {
      alert("이름과 가격을 모두 입력해주세요.");
      return;
    }
    const formattedPrice = price.toLocaleString().replace(/,/g, "");
    const alertMessage = { name, price: formattedPrice };
    alert(`name: ${alertMessage.name}, price: ${alertMessage.price}`);
    setName("");
    setPrice(0);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    const priceValue = event.target.value.replace(/\D/g, ""); // 숫자 이외의 문자 제거
    setPrice(priceValue !== "" ? priceValue : "0");
  };

  return (
    <div>
      <GlobalStyle />
      <h1>Input</h1>
      <form onSubmit={onSubmitHandler}>
        <StContainer>
          <div>
            <label>이름</label>
            <StInput type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>가격</label>
            <StInput
              type="text"
              value={price !== "" ? Number(price).toLocaleString() : ""}
              onChange={handlePriceChange}
            />
          </div>
          <StBtn>저장</StBtn>
        </StContainer>
      </form>
    </div>
  );
}

export default Input;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const StInput = styled.input`
  border: 1px solid black;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StBtn = styled.button`
  border: none;
  background-color: #9de88e;
  color: black;
  height: 40px;
  width: 100px;
  &:active {
    background-color: #71ba63;
  }
`;
