import React from "react";
import styled from "styled-components";

const TextContent = ({ children }) => {
  return (
    <div>
      <Text>{children}</Text>
    </div>
  );
};

export default TextContent;

const Text = styled.p`
  font-family: "Inter";
  font-size: 18px;
  font-weight: lighter;
`;
