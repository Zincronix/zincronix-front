import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.p`
  font-family: "Inter";
  font-size: 40px;
  font-weight: 300;
`;
