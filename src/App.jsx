import DetalleReserva from "./pages/DetalleReserva";
import Main from "./Layout/Main";
import SolicitarReserva from "./pages/SolicitarReserva";
import Slidebar from "./components/SlideBar/slidebar";
import Header from './components/Header/header';
function App() {
  return (
    <Main
      aside={<Slidebar />}
      header={<Header />}
      main={<SolicitarReserva content={<DetalleReserva />} />}
    />
  );
}

export default App;
