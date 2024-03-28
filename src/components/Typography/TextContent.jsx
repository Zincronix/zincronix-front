import React from "react";
import styled from "styled-components";
import Asterisk from "../Others/Asterisk";

const TextContent = ({ children, mandatory }) => {
  if (mandatory) {
    return (
      <Div>
        <Text>{children}</Text>
        <Asterisk />
      </Div>
    );
  } else {
    return (
      <div>
        <Text>{children}</Text>
      </div>
    );
  }
};

export default TextContent;
const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  font-family: "Inter";
  font-size: 18px;
  font-weight: 200;
`;
