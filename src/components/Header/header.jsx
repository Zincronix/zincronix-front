import React from "react";
import styled from "styled-components";
import LogoUniversidad from "../Images/logo_umss.png";
import LogoFacultad from "../Images/logo_fcyt.jpeg";

const Header = () => {
  return (
    <StyledHeader>
      <Imagen src= {LogoUniversidad} alt="LogoUniversidad" />
      <TopRectangulo1 />
      <Titulo>FACULTAD DE CIENCIAS Y TECNOLOGÍA</Titulo>
      <TopRectangulo2 />
      <WhiteRectangulo />
      <ImagenD src = {LogoFacultad} alt="LogoFacultad" />
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

const TopRectangulo2 = styled.div`
  height: 15px; 
  background-color: #072543; 
  width: 110%; 
  position: absolute; 
  top: 85%;
  right: 0%; 
  z-index: 2;
`;

const TopRectangulo1 = styled.div`
  height: 8px; 
  background-color: #A21426; 
  width: 80%; 
  position: absolute; 
  top: 75%; 
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Imagen = styled.img`
  position: absolute;
  top: 45%;
  left: 20px; 
  transform: translateY(-50%); 
  height: 120px;
  z-index: 4; 
`;

const ImagenD = styled.img`
  position: absolute;
  top: 3px;
  right: 20px;
  height: 45px;
  z-index: 4;
`;

export default Header;

