import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`esim-mobile-data-plans-for-tou-parent ${className}`}>
      <b className="esim-mobile-data">
        eSIM mobile data plans for tourism and business
      </b>
      <div className="search-normal-parent">
        <img className="search-normal-icon" alt="" src="/searchnormal.svg" />
        <div className="find-a-country">Find a country</div>
      </div>
      <div className="image-link-items-parent">
        <div className="image-link-items">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="countries">Countries</div>
        </div>
        <div className="image-link-items1">
          <img className="image-icon1" alt="" src="/image@2x.png" />
          <div className="global">Global</div>
        </div>
        <div className="image-link-items2">
          <img className="image-icon2" alt="" src="/image@2x.png" />
          <div className="regions">Regions</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
