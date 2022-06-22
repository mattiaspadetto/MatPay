import { useLocation } from "react-router-dom";
import NavTitle from "../components/navTitle";
import "../css/movimenti.css";
import { useState } from "react";
import CircleIcon from "../components/circleIcon";

export default function Movimenti({ dataTran }) {
  const [viewAll, setViewAll] = useState(false);
  const location = useLocation();

  const cardLocation = location.pathname.split("/").filter((el, i) => i === 2);

  const transactionsCard = dataTran.filter((el) => el.carta == cardLocation);

  return (
    <div className="wrapper">
      <NavTitle title={cardLocation} />
      {!viewAll ? (
        <div
          className="card-image"
          style={{
            backgroundImage: `url(/images/${cardLocation}.png)`,
            margin: "8px 0",
          }}
        ></div>
      ) : null}
      <div class="item-tran" style={{ margin: "16px 0", alignItems: "center" }}>
        <span>Ultime transazioni</span>
        <span className="font-small" onClick={() => setViewAll(!viewAll)}>
          {!viewAll ? "Espandi" : "Riduci"}
        </span>
      </div>
      <div className="transaction-list">
        {transactionsCard.map((tran, index) => {
          const numberOfItems = viewAll ? true : index < 4;
          if (numberOfItems)
            return (
              <div className="item-tran" key={index}>
                <CircleIcon
                  locationName={tran.luogoTransazione}
                  bigSize={false}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <span className="font-normal">{tran.luogoTransazione}</span>
                  <span className="font-small">{tran.dataTransazione}</span>
                </div>
                <span className="font-normal" style={{ fontWeight: "800" }}>
                  €{tran.importoTransazione}
                </span>
              </div>
            );
        })}
      </div>
    </div>
  );
}
