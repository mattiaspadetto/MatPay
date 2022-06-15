import NavTitle from "../components/navTitle";
import "../css/home.css";
import { useFetch } from "../fetch";
import CardCarousel from "../components/carousel";

export default function Home({ dataUser }) {
  return (
    <div className="wrapper">
      <NavTitle title={"Home"} />
      <div className="welcome-message">Ciao {dataUser.user}!</div>
      <div className="my-cards">
        <span className="font-normal">Le mie carte </span>
        <span className="material-icons">add_box</span>
      </div>
      <div className="card-informations">
        Clicca sulla carta per maggiori informazioni
      </div>
      <CardCarousel />
    </div>
  );
}
