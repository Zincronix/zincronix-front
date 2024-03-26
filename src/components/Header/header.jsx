import React from "react";
import styled from "styled-components";
import LogoUniversidad from "../Images/logo_umss.png";
import LogoFacultad from "../Images/logo_fcyt.png";

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
  height: 8px; 
  background-color: #072543; 
  width: 75%; 
  position: absolute; 
  top: 100%;
  right: 0%; 
  z-index: 2;
`;

const TopRectangulo1 = styled.div`
  height: 8px; 
  background-color: #A21426; 
  width: 65%; 
  position: absolute; 
  top: 90%; 
  right: 0%; 
  transform: translateY(-50%); 
  z-index: 3; 
`;

const Titulo = styled.div`
  position: absolute;
  top: 50%; 
  right:10%;
  transform: translate(-50%, -50%); 
  font-size: 25px;
  color: #A21426;
  font-family: 'Inter';
  font-weight: bold;
  z-index: 4; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Imagen = styled.img`
  position: absolute;
  top: 50%;
  left: 0px; 
  transform: translateY(-50%); 
  height: 125px;
  z-index: 4; 
`;

const ImagenD = styled.img`
  position: absolute;
  top: 5px;
  right: 25px;
  height: 50px;
  z-index: 4;
`;

export default Header;

