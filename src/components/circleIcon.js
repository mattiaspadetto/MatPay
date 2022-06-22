const CircleIcon = ({ locationName, bigSize }) => {
  return (
    <div className={bigSize ? "circleIconBig" : "circleIconSmall"}>
      <span>{locationName.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default CircleIcon;
