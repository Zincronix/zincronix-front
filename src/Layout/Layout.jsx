import { Link, Outlet } from "react-router-dom"
export function Layout () {
  return (
    <>
    <header>header</header>
    <aside>aside</aside>
    <Link to={"registrar_ambiente"}>
      Registrar Ambiente
    </Link>
    <Link to={"registrar_docente"}>
      Registrar Docente
    </Link>
    <Link to={"registrar_solicitud"}>
      Registrar Solicitud
    </Link>

    <Outlet/>
    </>
  );
}
