import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Typography/Title";
import ProgressBar from "../components/Others/ProgressBar";

const SolicitarReserva = ({ content }) => {
  const [currentState, setCurrentState] = useState(1);
  return (
    <Div>
      <Title>SOLICITAR RESERVA DE AMBIENTE</Title>
      <StyledProgressBar>
        <ProgressBar currentState={currentState} />
      </StyledProgressBar>
      <Content>{content}</Content>
    </Div>
  );
};

export default SolicitarReserva;

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const StyledProgressBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 67px;
  width: 574px;
  height: 10px;
`;

const Content = styled.div``;
