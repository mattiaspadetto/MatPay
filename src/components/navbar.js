import { Link } from "react-router-dom";
import { useFetch } from "../fetch";

export default function Navbar() {
  return (
    <div class="navbar">
      <span>
        <Link to={"/home"}>Home</Link>
      </span>
      <span>
        <Link to={`/movimenti/card1`}>Movimenti</Link>
      </span>
      <span>
        <Link to={"/profilo"}>Profilo</Link>
      </span>
    </div>
  );
}
