import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import BankCards from "./Components/BankCards";
import Input from "./Components/Input";
import Result from "./Components/Result";

function App() {
  return (
    <Body>
      <GlobalStyles />
      <BankCards />
      <Input />
      <Result />
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 343px;
  }
`;

export default App;
