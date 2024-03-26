import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = ({ aside, header, main }) => {
  return (
    <Container>
      <StyledHeader>{header} </StyledHeader>
      <Div>
        <StyledAside>{aside}</StyledAside>
        {/* <StyledMain>{main}</StyledMain> */}
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Div>
    </Container>
  );
};
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  background-color: skyblue;
`;

const StyledAside = styled.div`
  display: flex;
  background-color: gray;
  max-width: 20%;
`;

const StyledMain = styled.div`
  display: flex;
  // background-color: pink;
  width: 100%;
  padding-top: 5em;
  padding-left: 5em;
`;