import DetalleReserva from "./pages/DetalleReserva";
import Main from "./Layout/Main";
import SolicitarReserva from "./pages/SolicitarReserva";

function App() {
  return (
    <Main
      aside={"asideComponent"}
      header={"HeaderComponent"}
      main={<SolicitarReserva content={<DetalleReserva />} />}
    />
  );
}

export default App;
