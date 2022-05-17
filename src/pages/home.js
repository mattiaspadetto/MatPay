import NavTitle from "../components/navTitle";
import "../css/home.css";
import { useFetch } from "../fetch";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardCarousel from "../components/carousel";

export default function Home() {

  const { data, isLoaded, error, fetchAgain } = useFetch(
    "http://localhost:3001/dati",
    "GET"
  );

  return (
    <div className="wrapper">
      <NavTitle title={"Home"}/>
      <div className="welcome-message">
        Ciao {data.user}!
      </div>
      <div className="my-cards">
        <span className="font-normal">Le mie carte </span>
        <span><AddCircleIcon style={{fontSize: 28}} className="addCardsIcon"/></span>
      </div>
      <div className="card-informations">Clicca sulla carta per maggiori informazioni</div>
      <CardCarousel />
    </div>
  );
}
