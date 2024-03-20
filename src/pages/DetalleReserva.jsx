import React, { useState } from "react";
import styled from "styled-components";
import Subtitle from "../components/Typography/Subtitle";
import TextContent from "../components/Typography/TextContent";
import Text from "../components/Typography/Text";
import Button from "../components/Buttons/Button";
import TextArea from "../components/Inputs/TextArea";

function DetalleReserva() {
  return (
    <>
      <Subtitle>Detalles de la reserva:</Subtitle>
      <Container>
        <Div>
          <table>
            <tr>
              <td>
                <TextContent>Docente(s):</TextContent>
              </td>
              <td>
                <div className="docente-field">
                  <div className="box-selected">
                    <Text>MARCO VEIZAGA, JUAN RAMON</Text>
                  </div>
                  <Button className="add-btn">+ Agregar docente</Button>
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
                  <Button className="add-btn">+ Agregar materia</Button>
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
                  <Button className="add-btn">+ Agregar grupo</Button>
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
                <Button
                  type="primary"
                  onClick={() => console.log(docenteSelected)}
                >
                  RESERVAR
                </Button>
              </td>
              <td className="cancel">
                <Button type="secondary">CANCELAR</Button>
              </td>
            </tr>
          </table>
        </Div>
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

const Div = styled.div`
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
