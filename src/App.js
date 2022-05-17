import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movimenti from "./pages/movimenti";
import Profilo from "./pages/profilo";
import Wrapper from "./components/wrapper";
import Login from "./pages/login";
import Iscrizione from "./pages/iscrizione";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/iscriviti" element={<Iscrizione />} />
        <Route
          path="/home"
          element={
            <Wrapper>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path="/movimenti"
          element={
            <Wrapper>
              <Movimenti />
            </Wrapper>
          }
        />
        <Route
          path="/profilo"
          element={
            <Wrapper>
              <Profilo />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
