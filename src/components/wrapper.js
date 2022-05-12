import Navbar from "./navbar";
import "../css/navbar.css";

const Wrapper = (props) => {
  return (
    <div>
      {props.children}
      <Navbar />
    </div>
  );
};

export default Wrapper;
