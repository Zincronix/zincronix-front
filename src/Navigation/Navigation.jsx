import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Layout/Main";
import Slidebar from "../components/SlideBar/slidebar";
import SolicitarReserva from "../pages/SolicitarReserva";
import DetalleReserva from "../pages/DetalleReserva";
import styled from "styled-components";
import Header from "../components/Header/header";
import { RegistrarDocente } from "../pages/RegistrarDocente";

export const getRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <h1>INICIO</h1>,
      errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "/reservar",
      element: <Main aside={<Slidebar />} header={<Header />} />,
      children: [
        {
          path: "/reservar/detalle",
          element: <SolicitarReserva content={<DetalleReserva />} />,
        },
      ],
    },
    {
      path: "/registrar",
      element: <Main aside={<Slidebar />} header={<Header />} />,
      children: [
        {
          path: "/registrar/docente",
          element: <RegistrarDocente />,
        },
      ],
    },
  ]);
};

const H1 = styled.h1`
  padding: 10em;
`;
