import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUniversity,
  faClock,
  faChalkboardTeacher,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  width: 150px;
  height: 100%;
  background-color: #072543;
  position: fixed;
  left: 0;
  top: 70px;
  padding: 20px;
  font-family: "Inter";
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
  font-family: "Inter";
  transition: box-shadow 0.2s;
  text-decoration: underline;
  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: "Inter";
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;

const SubMenu = styled.div`
  margin-left: 25px;
  margin-top: -20px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-family: "Inter";
`;

const SubMenuItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  font-family: "Inter";

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
      {/* <NavItem>
        <FontAwesomeIcon icon={faHome} style={{ marginRight: "14px" }} />
        <Link to="/">Inicio</Link>
      </NavItem> */}

      <NavItem onClick={handleAmbientesClick}>
        <FontAwesomeIcon icon={faUniversity} style={{ marginRight: "14px" }} />
        Ambientes
        <IconButton>
          <FontAwesomeIcon
            icon={ambientesExpanded ? faAngleDown : faAngleRight}
          />
        </IconButton>
      </NavItem>

      {ambientesExpanded && (
        <SubMenu>
          <SubMenuItem>
            <Link to="/todosLosAmbientes">Todos los ambientes</Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link to="/agregarAmbiente">Agregar ambiente</Link>
          </SubMenuItem>
        </SubMenu>
      )}

      <NavItem>
        <FontAwesomeIcon icon={faClock} style={{ marginRight: "14px" }} />
        <Link to="/reservar/detalle">Reservas</Link>
      </NavItem>

      <NavItem onClick={handleDocentesClick}>
        <FontAwesomeIcon
          icon={faChalkboardTeacher}
          style={{ marginRight: "14px" }}
        />
        Docentes
        <IconButton>
          <FontAwesomeIcon
            icon={docentesExpanded ? faAngleDown : faAngleRight}
          />
        </IconButton>
      </NavItem>

      {docentesExpanded && (
        <SubMenu>
          <SubMenuItem>
            <Link to="/todosAmbientes">Todos los docentes</Link>
          </SubMenuItem>
          <SubMenuItem>
            {" "}
            <Link to="/registrar/docente">Agregar docente</Link>
          </SubMenuItem>
        </SubMenu>
      )}
    </NavContainer>
  );
};

export default NavBar;
