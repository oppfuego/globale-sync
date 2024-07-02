import PropTypes from "prop-types";
import "./Steps.css";

const Steps = ({ className = "", image }) => {
  return (
    <div className={`steps1 ${className}`}>
      <div className="steps2">1</div>
      <div className="check-your-device-container">
        <span className="check-your-device-container1">
          <span>{`Check your `}</span>
          <span className="device-compatibility">device compatibility</span>
          <span> in our list</span>
        </span>
      </div>
      <img className="image-icon3" alt="" src={image} />
    </div>
  );
};

Steps.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Steps;
