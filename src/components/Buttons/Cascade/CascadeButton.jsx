import React from "react";
import styled from "styled-components";
import Button from "../Button";

const CascadeButton = ({ buttonProps, buttonText, children, showCascade }) => {
  return (
    <Dropdown>
      <Button {...buttonProps}>{buttonText}</Button>
      {showCascade && <DropdownContent>{children}</DropdownContent>}
    </Dropdown>
  );
};

export default CascadeButton;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;
const DropdownContent = styled.div`
  display: block;
  z-index: 9999;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 280px;
  padding-inline: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  & p:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
