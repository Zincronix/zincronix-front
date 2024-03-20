import React from "react";
import styled from "styled-components";

const Subtitle = ({ children }) => {
  return (
    <div>
      <Text>{children}</Text>
    </div>
  );
};
export default Subtitle;

const Text = styled.p`
  font-family: "Inter";
  font-size: 22px;
`;
