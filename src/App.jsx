import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import Analises from "./components/analises/Analises.jsx";
import Historico from "./components/historico/Historico.jsx";
import Cadastro from "./components/cadastro/Cadastro.jsx";
import "./global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/reembolsos" element={<Reembolsos/>} />
        <Route path="/solicitacao" element={<Solicitacao/>} />
        <Route path="/pesquisa" element={<Analises/>} />
        <Route path="/historico" element={<Historico/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
