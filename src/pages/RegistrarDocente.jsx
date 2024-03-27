import styled from "styled-components";

const departaments = ['fisica', 'matematicas', 'informatica'];
const materia = ['fisica 1', 'elementos', 'programacion'];

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
								departaments.map((name, index) => 
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

				</FieldsContainer>

				<ButtonsContainer>
					<ButtonStyled>CANCELAR</ButtonStyled>
					<ButtonStyled>GUARDAR</ButtonStyled>
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
	font-size: 2em;
	font-weight: 300;
	font-style: oblique;
`;

const FieldSetStyled = styled.fieldset`
	display: flex;
	align-items: center;
	column-gap: 1em;
	justify-content: space-between;
	padding: 0;
	border: none;
`;

const LabelStyled = styled.label`
	font-size: 1em;
	font-weight: bold;
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

const SelectStyled2 = styled.select`
	padding: 0.5em 2em;
	width: 19em;

`;