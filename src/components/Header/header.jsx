import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Imagen src="./Images/logo_umss.png" alt="LogoUniversidad" />
      <TopRedRectangulo />
      <Titulo>FACULTAD DE CIENCIAS Y TECNOLOGÍA</Titulo>
      <TopBlueRectangulo />
      <WhiteRectangulo />
      <ImagenD src="./Images/logo_fcyt.png" alt="LogoFacultad" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const WhiteRectangulo = styled.div`
  background-color: white;
  height: 70px;
  width: 100%;
  position: relative;
  z-index: 1; 
`;

const TopBlueRectangulo = styled.div`
  height: 15px; 
  background-color: #072543; 
  width: 110%; 
  position: absolute; 
  top: 85%;
  right: 0%; 
  z-index: 2;
`;

const TopRedRectangulo = styled.div`
  height: 8px; 
  background-color: #A21426; 
  width: 80%; 
  position: absolute; 
  top: 70%; 
  right: 0%; 
  transform: translateY(-50%); 
  z-index: 3; 
`;

const Titulo = styled.div`
  position: absolute;
  top: 40%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  font-size: 30px;
  color: #A21426;
  font-family: 'Inter';
  font-weight: bold;
  z-index: 4; 
`;

const Imagen = styled.img`
  position: absolute;
  top: 50%;
  left: 20px; 
  transform: translateY(-50%); 
  height: 50px;
  z-index: 4; 
`;

const ImagenD = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 50px;
  z-index: 4;
`;

export default Header;

