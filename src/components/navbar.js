import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div class="navbar">
      <span>
        <Link to={"/home"}>Home</Link>
      </span>
      <span>
        <Link to={"/movimenti"}>Movimenti</Link>
      </span>
      <span>
        <Link to={"/profilo"}>Profilo</Link>
      </span>
    </div>
  );
}
