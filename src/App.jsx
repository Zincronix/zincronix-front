import DetalleReserva from "./pages/DetalleReserva";
import Main from "./Layout/Main";
import SolicitarReserva from "./pages/SolicitarReserva";
import Slidebar from "./components/SlideBar/slidebar";

function App() {
  return (
    <Main
      aside={<Slidebar />}
      header={"HeaderComponent"}
      main={<SolicitarReserva content={<DetalleReserva />} />}
    />
  );
}

export default App;
