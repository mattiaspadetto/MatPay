import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movimenti from "./pages/movimenti";
import Profilo from "./pages/profilo";
import Wrapper from "./components/wrapper";
import Login from "./pages/login";
import Iscrizione from "./pages/iscrizione";
import { useFetch } from "./fetch";
import { useState } from "react";
import ProfiloCarta from "./pages/profiloCarta";

export default function App() {
  const [test, setTest] = useState();

  const { data: dataTransazioni } = useFetch(
    "https://my-json-server.typicode.com/mattiaspadetto/matpay-server/transazioni",
    "GET"
  );

  const { data: dataPerson } = useFetch(
    "https://my-json-server.typicode.com/mattiaspadetto/matpay-server/person",
    "GET"
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login dataPerson={dataPerson} />} />
        <Route path="/iscriviti" element={<Iscrizione />} />
        <Route
          path="/home"
          element={
            <Wrapper>
              <Home dataUser={dataPerson} />
            </Wrapper>
          }
        />
        <Route
          path="/movimenti/:id"
          element={
            <Wrapper>
              <Movimenti dataTran={dataTransazioni} />
            </Wrapper>
          }
        />
        <Route
          path="/profilo"
          element={
            <Wrapper>
              <Profilo dataUser={dataPerson} />
            </Wrapper>
          }
        />
        <Route path="/le-mie-carte" element={<ProfiloCarta />} />
      </Routes>
    </BrowserRouter>
  );
}
