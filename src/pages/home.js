import NavTitle from "../components/navTitle";
import "../css/home.css";
import CardCarousel from "../components/carousel";
import { Link } from "react-router-dom";

export default function Home({ dataUser }) {
  return (
    <div className="wrapper">
      <NavTitle title={"Home"} />
      <div className="welcome-message">Ciao {dataUser.user}!</div>
      <div className="my-cards">
        <span className="font-normal">Le mie carte </span>
        <Link to={"/le-mie-carte"}>
          <span className="material-icons">add_box</span>
        </Link>
      </div>
      <div className="card-informations">
        Clicca sulla carta per maggiori informazioni
      </div>
      <CardCarousel />
    </div>
  );
}
