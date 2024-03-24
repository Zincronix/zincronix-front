import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Subtitle, TextContent, Text } from "../components/Typography";
import { TextArea, TextInput } from "../components/Inputs";
import { Button, CascadeButton } from "../components/Buttons";
import { getDocentes } from "../services/docenteService";
import { getMaterias } from "../services/materiaService";
import { getGrupos } from "../services/grupoService";
import adaptDocente from "../adapters/docenteAdapter";
import DivStyled from "../styled-components/DivStyled";
import Asterisk from "../components/Others/Asterisk";
function DetalleReserva() {
  const [showDocentes, setShowDocentes] = useState(false);
  const [showMaterias, setShowMaterias] = useState(false);
  const [showGrupos, setShowGrupos] = useState(false);

  const [docentesSelected, setDocentesSelected] = useState([]);
  const [materiasSelected, setMateriasSelected] = useState([]);
  const [gruposSelected, setGruposSelected] = useState([]);

  const [data, setData] = useState();

  const [docentes, setDocentes] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    loadDocentes();
    loadMaterias();
    loadGrupos();
  }, []);

  const loadDocentes = async () => {
    try {
      const docentesData = await getDocentes();
      const adaptedDocete = docentesData.map(adaptDocente);
      setDocentes(adaptedDocete);
    } catch (error) {
      console.error("Error al cargar docentes: ", error);
    }
  };

  const loadMaterias = async () => {
    try {
      const materiasData = await getMaterias();
      setMaterias(materiasData);
      //console.log(materiasData);
    } catch (error) {
      console.error("Error al cargar materias: ", error);
    }
  };

  const loadGrupos = async () => {
    try {
      const gruposData = await getGrupos();
      setGrupos(gruposData);
      //console.log(grupos);
    } catch (error) {
      console.error("Error al cargar grupos: ", error);
    }
  };

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

  const handleSelect = (e, field, nombre) => {
    if (field == "docente") {
      setData(nombre);
      setDocentesSelected([...docentesSelected, nombre]);
      console.log(docentesSelected);
      console.log(data);
      return;
    }
    if (field == "materia") {
      setData(nombre);
      setMateriasSelected([...materiasSelected, nombre]);
      console.log(materiasSelected);
      console.log(data);
      return;
    }
    if (field == "grupo") {
      setData(nombre);
      setGruposSelected([...gruposSelected, nombre]);
      console.log(gruposSelected);
      console.log(data);
      return;
    }
  };

  return (
    <>
      <Subtitle>Detalles de la reserva:</Subtitle>
      <Container>
        <Form onSubmit={() => console.log("submit")}>
          <table>
            <tbody>
              <tr>
                <td>
                  <TextContent mandatory={true}>Docente(s):</TextContent>
                </td>
                <td>
                  <div className="docente-field">
                    <DivStyled
                      type="text"
                      disabled={true}
                      // placeholder={"MARIA BLANCO, RENAN FLORES"}
                      //value="MARIA BLANCO, RENAN FLORES"
                      value={docentesSelected.map(
                        (docente) => docente.nombre + ", "
                      )}
                    />
                    <CascadeButton
                      buttonText="+ Agregar docente"
                      buttonProps={{
                        type: "button",
                        onClick: () => handleShowCascade("docentes"),
                      }}
                      showCascade={showDocentes}
                    >
                      {docentes.map((docente, index) => (
                        <Text
                          key={index}
                          onClick={(e) =>
                            handleSelect(e, "docente", {
                              id: docente.id,
                              nombre: docente.nombre,
                            })
                          }
                        >
                          {docente.nombre}
                        </Text>
                      ))}
                    </CascadeButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <TextContent mandatory={true}>Materia(s):</TextContent>
                </td>
                <td>
                  <div className="docente-field">
                    <DivStyled
                      type="text"
                      disabled={true}
                      // placeholder={"MARIA BLANCO, RENAN FLORES"}
                      //value="REDES AVANZADAS, CALCULO II"
                      value={materiasSelected.map(
                        (materia) => materia.nombre + ", "
                      )}
                    />

                    <CascadeButton
                      buttonText="+ Agregar materia"
                      buttonProps={{
                        type: "button",
                        onClick: () => handleShowCascade("materias"),
                      }}
                      showCascade={showMaterias}
                    >
                      {materias.map((materia, index) => (
                        <Text
                          key={index}
                          onClick={(e) =>
                            handleSelect(e, "materia", {
                              id: materia.id,
                              nombre: materia.nombre,
                            })
                          }
                        >
                          {materia.nombre}
                        </Text>
                      ))}
                    </CascadeButton>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <TextContent mandatory={true}>Grupo(s):</TextContent>
                </td>
                <td>
                  <div className="docente-field">
                    <DivStyled
                      type="text"
                      disabled={true}
                      // placeholder={"MARIA BLANCO, RENAN FLORES"}
                      //value="CALCULO II/G1, REDES AVANZADAS/G3"
                      value={gruposSelected.map((grupo) => grupo.nombre + ", ")}
                    />
                    <CascadeButton
                      buttonText="+ Agregar grupo"
                      buttonProps={{
                        type: "button",
                        onClick: () => handleShowCascade("grupos"),
                      }}
                      showCascade={showGrupos}
                    >
                      {grupos.map((grupo, index) => (
                        <Text
                          key={index}
                          onClick={(e) =>
                            handleSelect(e, "grupo", {
                              id: grupo.id,
                              nombre: grupo.nombre,
                            })
                          }
                        >
                          {grupo.nombre}
                        </Text>
                      ))}
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
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <Button
                    type="submit"
                    typeBtn="primary"
                    onClick={() => console.log("reservar presionado")}
                  >
                    RESERVAR
                  </Button>
                </td>
                <td className="cancel">
                  <Button typeBtn="secondary">CANCELAR</Button>
                </td>
              </tr>
            </tbody>
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
