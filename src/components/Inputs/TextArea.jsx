import React from "react";
import styled from "styled-components";

const TextArea = ({ children, placeholder }) => {
  return (
    <div>
      <StyledTextarea placeholder={placeholder}>{children}</StyledTextarea>
    </div>
  );
};
export default TextArea;
const StyledTextarea = styled.textarea`
  display: flex;
  background-color: #f5f5f5;
  border: solid 2px #a3acb9;
  padding-inline: 0.5em;
  border-radius: 5px;
  margin-bottom: 0.2em;
  width: 240px;
  height: 126px;
  font-family: "Inter";
  font-size: 12px;
`;
