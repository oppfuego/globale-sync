import PropTypes from "prop-types";
import "./CountryItems.css";

const CountryItems = ({ className = "", flagAF, afghanistan }) => {
  return (
    <div className={`country-items ${className}`}>
      <div className="country-item-details">
        <img className="flagaf-icon" alt="" src={flagAF} />
        <div className="afghanistan">{afghanistan}</div>
      </div>
      <img className="arrow-down-icon" alt="" src="/arrowdown.svg" />
    </div>
  );
};

CountryItems.propTypes = {
  className: PropTypes.string,
  flagAF: PropTypes.string,
  afghanistan: PropTypes.string,
};

export default CountryItems;
