import PropTypes from "prop-types";
import "./Items.css";

const Items = ({ className = "" }) => {
  return (
    <div className={`items ${className}`}>
      <div className="items1">
        <div className="item">
          <img className="image-icon5" alt="" src="/image@2x.png" />
        </div>
        <div className="item1">
          <img className="image-icon6" alt="" src="/image@2x.png" />
        </div>
        <div className="item2">
          <img className="image-icon7" alt="" src="/image@2x.png" />
        </div>
        <div className="item3">
          <img className="image-icon8" alt="" src="/image@2x.png" />
        </div>
        <div className="item4">
          <img className="image-icon9" alt="" src="/image@2x.png" />
        </div>
        <div className="item5">
          <img className="image-icon10" alt="" src="/image@2x.png" />
        </div>
        <div className="item6">
          <img className="image-icon11" alt="" src="/image@2x.png" />
        </div>
        <div className="item7">
          <b className="network-operators">
            <span className="network-operators-txt-container">
              <p className="network">800+ network</p>
              <p className="operators">operators</p>
            </span>
          </b>
        </div>
      </div>
    </div>
  );
};

Items.propTypes = {
  className: PropTypes.string,
};

export default Items;
