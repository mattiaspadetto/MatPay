import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../fetch";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  const { data, isLoaded, error, fetchAgain } = useFetch(
    "http://localhost:3001/dati",
    "GET"
  );

    let navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      if (data.user === user && data.psw === password) {
        navigate("/home", { replace: true });
      } else {
        setShow(true);
        setUser("");
        setPassword("");
      }

    }

  if (error) {
    return <div>Error. Please refresh the page</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="logo">
          <span>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7433 46.2816C22.5094 47.2975 24.6061 47.5719 26.5742 47.0449C28.5422 46.5179 30.2212 45.2324 31.2433 43.47L40.9967 26.6C41.2728 26.1221 41.4519 25.5944 41.524 25.0472C41.596 24.4999 41.5594 23.9439 41.4164 23.4108C41.2734 22.8777 41.0267 22.378 40.6904 21.9403C40.3541 21.5027 39.9349 21.1355 39.4567 20.86L36.54 19.18L20.7433 46.2816ZM20.3583 46.06C18.7537 45.1306 17.5834 43.6024 17.1044 41.811C16.6254 40.0196 16.8768 38.1113 17.8033 36.505L25.1883 23.6717C25.7422 22.7075 25.8912 21.563 25.6025 20.4891C25.3138 19.4153 24.611 18.4998 23.6483 17.9433L18.2817 14.8517C17.8057 14.5738 17.2795 14.3929 16.7333 14.3194C16.1871 14.2458 15.6318 14.2811 15.0993 14.4232C14.5668 14.5652 14.0677 14.8113 13.6308 15.1471C13.1938 15.483 12.8276 15.902 12.5533 16.38L6.56834 26.8333C5.28222 29.0764 4.93701 31.7375 5.60826 34.2345C6.2795 36.7315 7.91254 38.8608 10.15 40.1566L14.3033 42.56L20.3583 46.06Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1983 16.5667L22.925 13.58C24.2254 11.3315 26.3654 9.69119 28.8745 9.0196C31.3837 8.348 34.0569 8.70003 36.3067 9.99833L40.46 12.4017L46.515 15.9017C44.9073 14.9761 42.998 14.7265 41.2064 15.2077C39.4148 15.689 37.8875 16.8617 36.96 18.4683L26.8333 35.9333C26.2769 36.896 25.3613 37.5988 24.2875 37.8875C23.2137 38.1761 22.0692 38.0272 21.105 37.4733L18.1767 35.7817M46.9 16.1233C47.776 16.6263 48.5441 17.2971 49.1603 18.0975C49.7765 18.8978 50.2287 19.8119 50.491 20.7873C50.7533 21.7628 50.8205 22.7804 50.6887 23.7818C50.557 24.7833 50.2289 25.7489 49.7233 26.6233L42.84 38.5C42.2813 39.4635 41.3637 40.1665 40.2879 40.4551C39.2122 40.7437 38.066 40.5944 37.1 40.04L34.1833 38.3483L46.9 16.1233Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="font-big">MatPay</span>
          <span className="font-normal">I tuoi pagamenti a portata di mano.</span>
        </div>
        <div className="login">
          <span>Accedi al tuo account</span>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="user">
              <Form.Label>Utente</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <span style={show ? {display: "block"} : {display: "none"}} className="font-error">Email e/password errati</span>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Accedi
            </Button>
          </Form>
          <span className="font-normal">
            Non sei registrato? <Link to={"/iscriviti"}>Iscriviti subito</Link>
          </span>
        </div>
      </div>
    );
  }
}
