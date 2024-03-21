import React from "react";
import styled from "styled-components";

const ProgressBar = ({ currentState }) => {
  switch (currentState) {
    case 1:
      return (
        <Div>
          <div id="currentState"></div>
          <div id="empty"></div>
          <div id="empty"></div>
        </Div>
      );
    case 2:
      return (
        <Div>
          <div id="empty"></div>
          <div id="currentState"></div>
          <div id="empty"></div>
        </Div>
      );
    case 3:
      return (
        <Div>
          <div id="empty"></div>
          <div id="empty"></div>
          <div id="currentState"></div>
        </Div>
      );
    default:
      return (
        <Div>
          <div id="currentState"></div>
          <div id="currentState"></div>
          <div id="currentState"></div>
        </Div>
      );
  }
};

export default ProgressBar;
const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  #empty {
    background-color: #d9d9d9;
    width: 574px;
    height: 10px;
  }
  #currentState {
    background-color: #072543;
    width: 574px;
    height: 10px;
  }
`;
