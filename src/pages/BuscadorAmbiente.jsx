import React from "react";
import styled from "styled-components";
import Title from "../components/Typography/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-left: 400px; 
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: -450px; 
`;

const SearchBox = styled.div`
position: relative;
margin-right: 50px;
max-width: 450px;
`;

const SearchInput = styled.input`
  padding: 10px 40px 10px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 95%;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -30px;
`;

const ListaAmbientes = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Lista de Ambientes Registrados</Title>
      </TitleWrapper>
      <SearchContainer>
        <SearchBox>
          <SearchInput type="text" placeholder="Buscar por  nombre de ambiente…" />
          <SearchIcon icon={faSearch} />
        </SearchBox>
      </SearchContainer>
    </Container>
  );
};

export default ListaAmbientes;
