import PropTypes from "prop-types";
import "./Steps1.css";

const Steps1 = ({ className = "", prop, chooseTheDestinationaNdES, image }) => {
  return (
    <div className={`steps3 ${className}`}>
      <div className="div">{prop}</div>
      <div className="choose-the-destinationa">{chooseTheDestinationaNdES}</div>
      <img className="image-icon4" alt="" src={image} />
    </div>
  );
};

Steps1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  chooseTheDestinationaNdES: PropTypes.string,
  image: PropTypes.string,
};

export default Steps1;
