import React, { useState } from "react";
import styled from "styled-components";
import { Subtitle, TextContent, Text } from "../components/Typography";
import { TextArea, TextInput } from "../components/Inputs";
import { Button, CascadeButton } from "../components/Buttons";

function DetalleReserva() {
  const [showDocentes, setShowDocentes] = useState(false);
  const [showMaterias, setShowMaterias] = useState(false);
  const [showGrupos, setShowGrupos] = useState(false);

  const handleShowCascade = (field) => {
    if (field == "docentes") {
      setShowDocentes(!showDocentes);
      return;
    }
    if (field == "materias") {
      setShowMaterias(!showMaterias);
      return;
    }
    if (field == "grupos") {
      setShowGrupos(!showGrupos);
      return;
    }
  };
  return (
    <>
      <Subtitle>Detalles de la reserva:</Subtitle>
      <Container>
        <Form onSubmit={() => console.log("submit")}>
          <table>
            <tr>
              <td>
                <TextContent>Docente(s):</TextContent>
              </td>
              <td>
                <div className="docente-field">
                  <TextInput
                    type="text"
                    disabled={true}
                    // placeholder={"MARIA BLANCO, RENAN FLORES"}
                    value="MARIA BLANCO, RENAN FLORES"
                  />
                  <CascadeButton
                    buttonText="+ Agregar docente"
                    buttonProps={{
                      type: "button",
                      onClick: () => handleShowCascade("docentes"),
                    }}
                    showCascade={showDocentes}
                  >
                    <Text>MARIA LETICIA BLANCO COCA</Text>
                    <Text>RENAN FLORES</Text>
                  </CascadeButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <TextContent>Materia(s):</TextContent>
              </td>
              <td>
                <div className="docente-field">
                  <div className="box-selected">
                    <Text>REDES AVANZADAS, CALCULO II</Text>
                  </div>
                  <CascadeButton
                    buttonText="+ Agregar materia"
                    buttonProps={{
                      type: "button",
                      onClick: () => handleShowCascade("materias"),
                    }}
                    showCascade={showMaterias}
                  >
                    <Text>REDES AVANZADAS</Text>
                    <Text>CALCULO II</Text>
                  </CascadeButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <TextContent>Grupo(s):</TextContent>
              </td>
              <td>
                <div className="docente-field">
                  <div className="box-selected">
                    <Text>CALCULO II/G1, REDES AVANZADAS/G3</Text>
                  </div>
                  <CascadeButton
                    buttonText="+ Agregar grupo"
                    buttonProps={{
                      type: "button",
                      onClick: () => handleShowCascade("grupos"),
                    }}
                    showCascade={showGrupos}
                  >
                    <Text>CALCULO II / G1</Text>
                    <Text>REDES AVANZADAS / G3</Text>
                  </CascadeButton>
                </div>
              </td>
            </tr>
            <tr>
              <td className="booking-text">
                <TextContent>Motivo de la reserva:</TextContent>
              </td>
              <td>
                <TextArea placeholder="Text" />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <Button type="submit" typeBtn="primary" onClick={""}>
                  RESERVAR
                </Button>
              </td>
              <td className="cancel">
                <Button typeBtn="secondary">CANCELAR</Button>
              </td>
            </tr>
          </table>
        </Form>
      </Container>
    </>
  );
}
export default DetalleReserva;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 4em;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  // background-color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  justify-content: space-between;
  .input-reserva {
    width: 240px;
  }
  .box-selected {
    display: flex;
    min-height: 32px;
    border: solid 2px #a3acb9;
    padding-inline: 0.5em;
    border-radius: 5px;
    margin-bottom: 0.2em;
    width: 240px;
    height: auto;
  }
  table {
    margin-bottom: 2em;
    // border: solid 2px black;
    td {
      // border: solid 2px black;
      padding-top: 0.5em;
      padding-right: 4em;
      padding-bottom: 0.5em;
    }
    tr {
      width: 12em;
    }

    .booking-text {
      display: flex;
      padding-top: 0;
    }
    .cancel {
      display: flex;
      justify-content: end;
    }
  }
`;
