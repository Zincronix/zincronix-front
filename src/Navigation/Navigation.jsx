import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Layout/Main";
import Slidebar from "../components/SlideBar/slidebar";
import SolicitarReserva from "../pages/SolicitarReserva";
import DetalleReserva from "../pages/DetalleReserva";
import styled from "styled-components";

export const getRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <h1>INICIO</h1>,
      errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "/reservar",
      element: <Main aside={<Slidebar />} header={"HeaderComponent"} />,
      children: [
        {
          path: "/reservar/detalle",
          element: <SolicitarReserva content={<DetalleReserva />} />,
        },
      ],
    },
    // {
    //   path: "/",
    //   element: (
    //     <Main
    //       aside={<Slidebar />}
    //       header={"HeaderComponent"}
    //       main={<SolicitarReserva content={<h1>RESERVA</h1>} />}
    //     />
    //   ),
    // },
    // {
    //   path: "/admin",
    //   element: (
    //     <Main
    //       aside={<Slidebar />}
    //       header={"HeaderComponent"}
    //       main={<SolicitarReserva content={<DetalleReserva />} />}
    //     />
    //   ),
    //   children: [
    //     {
    //       path: "/admin/reservar",
    //       element: <SolicitarReserva content={<DetalleReserva />} />,
    //     },
    //   ],
    // },
  ]);
};

const H1 = styled.h1`
  padding: 10em;
`;
