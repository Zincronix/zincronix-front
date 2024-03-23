import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faClock, faChalkboardTeacher, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import Text from "../Typography/Text";

const NavContainer = styled.div`
  width: 150px;
  height: 100%;
  background-color: #3C5468;
  position: fixed;
  left: 0;
  top: 70px;
  padding: 20px;
  font-family: 'Inter';
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    top: 0;
    bottom: 0;
    overflow-y: auto;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px; 
  color: #fff;
  font-family: 'Inter';

  &:hover {
    text-decoration: underline;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Inter';
`;

const SubMenu = styled.div`
  margin-left: 25px;
  margin-top: -20px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Inter';
`;

const SubMenuItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  font-family: 'Inter';

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  const [ambientesExpanded, setAmbientesExpanded] = useState(false);
  const [docentesExpanded, setDocentesExpanded] = useState(false); 

  
  const handleAmbientesClick = () => {
    setAmbientesExpanded(!ambientesExpanded); 
  };

  const handleDocentesClick = () => {
    setDocentesExpanded(!docentesExpanded); 
  };

  return (
    <NavContainer>
      <NavItem>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '14px' }} />
        Inicio
      </NavItem>
      
      <NavItem>
        <FontAwesomeIcon icon={faUniversity} style={{ marginRight: '14px' }} />
        Ambientes
        <IconButton onClick={handleAmbientesClick}>
          <FontAwesomeIcon icon={ambientesExpanded ? faAngleDown : faAngleRight} />
        </IconButton>
      </NavItem>
      
      {ambientesExpanded && (
        <SubMenu>
          <SubMenuItem>Todos los ambientes</SubMenuItem>
          <SubMenuItem>Agregar ambiente</SubMenuItem>
        </SubMenu>
      )}

      <NavItem>
        <FontAwesomeIcon icon={faClock} style={{ marginRight: '14px' }} />
        Reservas
      </NavItem>
      
      <NavItem>
        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '14px' }} />
        Docentes
        <IconButton onClick={handleDocentesClick}>
          <FontAwesomeIcon icon={docentesExpanded ? faAngleDown : faAngleRight} />
        </IconButton>
      </NavItem>
      
      {docentesExpanded && (
        <SubMenu>
          <SubMenuItem>Todos los docentes</SubMenuItem>
          <SubMenuItem>Agregar docente</SubMenuItem>
        </SubMenu>
      )}
    </NavContainer>
  );
};

export default NavBar;


