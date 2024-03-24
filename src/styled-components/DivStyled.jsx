import React from "react";
import styled from "styled-components";
import { Text } from "../components/Typography";
const TextInput = ({ value, onChange, placeholder, type, disabled }) => {
  return (
    <StyledInput
      disabled={disabled}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      <Text>{value}</Text>
    </StyledInput>
  );
};

export default TextInput;
const StyledInput = styled.div`
  display: flex;
  min-height: 32px;
  border: solid 2px #a3acb9;
  padding-inline: 0.5em;
  border-radius: 5px;
  margin-bottom: 0.2em;
  width: 240px;
  height: auto;
  background-color: #f5f5f5;
  word-wrap: break-word;
`;
