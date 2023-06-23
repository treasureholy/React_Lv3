import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import { styled } from "styled-components";

function App() {
  return (
    <StMain>
      <Button />
      <Input />
      <Modal />
      <Select />
    </StMain>
  );
}

export default App;

const StMain = styled.div`
  margin: 10px;
`;
