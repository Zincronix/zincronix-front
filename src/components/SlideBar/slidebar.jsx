import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faClock, faChalkboardTeacher, faAngleRight } from '@fortawesome/free-solid-svg-icons'; 

const NavContainer = styled.div`
  width: 200px;
  height: 800px;
  background-color: #3C5468;
  position: fixed;
  left: 0;
  top: 60px;
  padding: 20px;
`;

const NavItem = styled.div`
  display: flex; 
  align-items: center; 
  margin-bottom: 30px;
  color: #fff;
`;


const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavItem>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} /> 
        Inicio
      </NavItem>
      
      <NavItem>
        <FontAwesomeIcon icon={faUniversity} style={{ marginRight: '10px' }} />
        Ambientes
        <IconButton>
          <FontAwesomeIcon icon={faAngleRight} />
        </IconButton>
      </NavItem>
      
      <NavItem>
        <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} /> 
        Reservas
      </NavItem>
      
      <NavItem>
        <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '10px' }} /> 
        Docentes
        <IconButton>
          <FontAwesomeIcon icon={faAngleRight} />
        </IconButton>
      </NavItem>
    </NavContainer>
  );
};

export default NavBar;


