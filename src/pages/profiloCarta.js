import NavTitle from "../components/navTitle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/profiloCarta.css";

export default function ProfiloCarta() {
  return (
    <div className="wrapper">
      <NavTitle title={"Le mie carte"} backButton={true} />
      <div
        className="card-image"
        style={{
          backgroundImage: `url(/images/card1.png)`,
          margin: "8px 0",
        }}
      ></div>
      <div className="cardProfile">
        <Form>
          <Form.Group size="lg" controlId="user">
            <Form.Label>nome e cognome</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Inserisci il nome presente sulla carta"
              //value={}
              //onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>numero carta</Form.Label>
            <Form.Control
              type="number"
              placeholder="Inserisci il numero della carta"
              //value={}
              //onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              height: "inherit",
            }}
          >
            <Form.Group controlId="cvv" style={{ width: "50%", margin: 0 }}>
              <Form.Label>cvv/cvc</Form.Label>
              <Form.Control type="number" placeholder="123" />
            </Form.Group>
            <Form.Group
              controlId="data-scadenza-carta"
              style={{ width: "50%", margin: 0 }}
            >
              <Form.Label>data di scadenza</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <Button block size="lg" type="submit">
            Salva carta
          </Button>
        </Form>
      </div>
    </div>
  );
}
