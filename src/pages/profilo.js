import CircleIcon from "../components/circleIcon";
import GeneralButtonLink from "../components/generalButtonLink";
import NavTitle from "../components/navTitle";
import "../css/profilo.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockIcon from "@material-ui/icons/Lock";
import CreditCardIcon from "@material-ui/icons/CreditCard";

export default function Profilo({ dataUser }) {
  return (
    <div className="wrapper">
      <NavTitle title={"Profilo"} />
      <div className="headerProfile">
        <CircleIcon locationName={dataUser.user} bigSize={true} />
        <span className="font-big">{dataUser.user}</span>
      </div>
      <div className="contentProfile">
        <GeneralButtonLink
          iconButton={<AccountCircleOutlinedIcon />}
          text={"Dati personali"}
        />
        <GeneralButtonLink iconButton={<LockIcon />} text={"Sicurezza"} />
        <GeneralButtonLink
          iconButton={<CreditCardIcon />}
          text={"Le mie carte"}
        />
      </div>
    </div>
  );
}
