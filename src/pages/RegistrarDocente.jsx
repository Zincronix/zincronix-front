import styled from "styled-components";

import { Button, CascadeButton } from "../components/Buttons";

const departament = ['fisica', 'matematicas', 'informatica'];
const materia = ['fisica 1', 'elementos', 'programacion'];
const grupo = ['1', '2', '3'];

export const RegistrarDocente = () => {
  return (
    <ContainerMain>
				<TitleStyled>AGREGAR DOCENTE</TitleStyled>
        
				<FieldsContainer>
					<FieldSetStyled>
						<LabelStyled htmlFor="name-jos">Nombre*: </LabelStyled>
						<InputStyled tfisicaype="text" name="name-jos" />
					</FieldSetStyled>

					<FieldSetStyled>
						<LabelStyled htmlFor="mail-jos">Correo Electronico*: </LabelStyled>
						<InputStyled type="text" name="mail-jos" />
					</FieldSetStyled>

					<FieldSetStyled>
						<LabelStyled htmlFor="mail-jos">Departamento*: </LabelStyled>
						<SelectStyled name="select-departamento">
							{
								departament.map((name, index) => 
									<option key={index} value={name}>{name}</option> )
							}
						</SelectStyled>
					</FieldSetStyled>

					<FieldSetStyled>
						<LabelStyled htmlFor="mail-jos">Materia(s)*: </LabelStyled>
						<SelectStyled name="select-materia">
							{
								materia.map((name, index) => 
									<option key={index} value={name}>{name}</option> )
							}
						</SelectStyled>
					</FieldSetStyled>
					
					<FieldSetStyled>
						<LabelStyled htmlFor="mail-jos">Grupo(s)*: </LabelStyled>
						<SelectStyled name="select-grupo">
							{
								grupo.map((name, index) => 
									<option key={index} value={name}>{name}</option> )
							}
						</SelectStyled>
					</FieldSetStyled>
					<br />

				</FieldsContainer>

				<ButtonsContainer>
          <Button type="submit" typeBtn="primary" onClick={""}>
              GUARDAR
          </Button>
          <Button className="cancel" typeBtn="secondary">CANCELAR</Button>
				</ButtonsContainer>
        
    </ContainerMain>
  )
}	

const ContainerMain = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	height: 100vh;
	width: 100%;
	padding: 1em;
`;

const FieldsContainer = styled.article`
	display: flex;
	flex-direction: column;
	row-gap: 1em;
`;

const TitleStyled = styled.h1`
	font-family: "Inter";
  font-size: 40px;
  font-weight: lighter;
`;

const FieldSetStyled = styled.fieldset`
	display: flex;
	align-items: center;
	column-gap: 3em;
	justify-content: space-between;
	padding: 0;
	border: none;
  font-family: "Inter";
  font-weight: lighter;
`;

const LabelStyled = styled.label`
	font-size: 1em;
`;

const InputStyled = styled.input`
	padding: 0.5em;
	border-radius: 2%;
	border: 0 white solid;
	width: 18em;
`;

const ButtonsContainer = styled.article`
	display: flex;
	justify-content: space-evenly;
	width: 30em;
`;

const ButtonStyled = styled.button`
	padding: 0.5em 2em;
`;

const SelectStyled = styled.select`
	padding: 0.5em 2em;
	width: 19em;
`;
