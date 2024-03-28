import React from "react";
import styled from "styled-components";

const Button = ({ children, typeBtn, onClick, type, color }) => {
  console.log("color+", color);
  if (typeBtn == "primary") {
    return (
      <PrimaryBtn onClick={onClick} type={type}>
        {children}
      </PrimaryBtn>
    );
  } else {
    if (typeBtn == "secondary") {
      return (
        <SecondaryBtn onClick={onClick} type={type}>
          {children}
        </SecondaryBtn>
      );
    } else {
      return (
        <Btn color={color} onClick={onClick} type={type}>
          {children}
        </Btn>
      );
    }
  }
};

export default Button;

const Btn = styled.button`
  border: none;
  color: ${(props) => props.color || "black"};
  background-color: #f5f5f5;
  font-size: 14px;
  font-weight: lighter;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

const PrimaryBtn = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #072543;
  font-size: 20px;
  width: 198px;
  height: 54px;
  color: #fff;
  border-radius: 10px;
  border: none;
  padding-inline: 2em;
  padding-block: 1em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(7, 37, 64, 0.7);
  }
`;
const SecondaryBtn = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a21426;
  color: #fff;
  font-size: 20px;
  width: 198px;
  height: 54px;
  border-radius: 10px;
  border: none;
  padding-inline: 2em;
  padding-block: 1em;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: rgb(162, 20, 38, 0.7);
  }
`;
