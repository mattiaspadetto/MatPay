import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const GeneralButtonLink = ({ iconButton, text }) => {
  return (
    <div className="generalButton">
      {iconButton}
      <span className="font-normal" style={{ flexGrow: 1 }}>
        {text}
      </span>
      <ArrowForwardIosIcon style={{ width: "18px", fill: "gray" }} />
    </div>
  );
};

export default GeneralButtonLink;
