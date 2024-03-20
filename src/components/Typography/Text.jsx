import React from "react";
import styled from "styled-components";

const Text = ({ children }) => {
  return <StyledTxt>{children}</StyledTxt>;
};
export default Text;

const StyledTxt = styled.p`
  font-family: "Inter";
  font-size: 12px;
`;
