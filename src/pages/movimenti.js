import { useLocation } from "react-router-dom";
import NavTitle from "../components/navTitle";
import "../css/movimenti.css";

export default function Movimenti({ dataTran }) {
  const location = useLocation();

  const cardLocation = location.pathname.split("/").filter((el, i) => i === 2);

  const transactionsCard = dataTran.filter((el) => el.carta == cardLocation);

  return (
    <div className="wrapper">
      <NavTitle title={cardLocation} />
      <div
        className="card-image"
        style={{
          backgroundImage: `url(/images/${cardLocation}.png)`,
          margin: "16px 0",
        }}
      ></div>
      <div>Ultime transazioni</div>
      <div className="transaction-list">
        {transactionsCard.map((tran, index) => {
          if (index < 5)
            return (
              <div className="item-tran" key={index}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="font-normal">{tran.luogoTransazione}</span>
                  <span className="font-normal">{tran.dataTransazione}</span>
                </div>
                <span className="font-normal">€{tran.importoTransazione}</span>
              </div>
            );
        })}
      </div>
    </div>
  );
}
