import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ESimPDComp.css";
import {Link} from "react-router-dom";

const ESimPDComp = ({ className = "", propLeft, propTop }) => {
  const eSimPDCompStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`esim-pd-comp ${className}`} style={eSimPDCompStyle}>
      <div className="gb-7-days">1GB 7 Days - Europe</div>
      <div className="frame-container">
        <div className="plan-card-feature-items-parent">
          <div className="plan-card-feature-items">
            <div className="plan-card-feature-icons">
              <img className="medal-star-icon" alt="" src="/medalstar.svg" />
            </div>
            <div className="gb-7-days1">1GB 7 Days - Europe</div>
          </div>
          <div className="gb-parent">
            <div className="gb">1GB</div>
            <div className="plan-card-data-icons">
              <img className="info-circle-icon" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="plan-card-loadable-items-parent">
          <div className="plan-card-loadable-items">
            <div className="plan-card-loadable-icons">
              <img className="medal-star-icon1" alt="" src="/medalstar.svg" />
            </div>
            <div className="loadable">Loadable</div>
          </div>
          <div className="yes-parent">
            <div className="yes">Yes</div>
            <div className="plan-card-loadable-info-icons">
              <img className="info-circle-icon1" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="plan-card-duration-items-parent">
          <div className="plan-card-duration-items">
            <div className="plan-card-duration-icons">
              <img className="medal-star-icon2" alt="" src="/medalstar.svg" />
            </div>
            <div className="duration">Duration</div>
          </div>
          <div className="days-parent">
            <div className="days">7 Days</div>
            <div className="plan-card-duration-info-icons">
              <img className="info-circle-icon2" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="plan-card-price-items-parent">
          <div className="plan-card-price-items">
            <div className="stars">
              <img className="medal-star-icon3" alt="" src="/medalstar.svg" />
            </div>
            <div className="price">Price</div>
          </div>
          <div className="prices">
            <div className="prices1">$3.90</div>
            <div className="prices2">
              <img className="info-circle-icon3" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="quantity">
          <div className="quantity1">
            <div className="quantity2">
              <img className="medal-star-icon4" alt="" src="/medalstar.svg" />
            </div>
            <div className="quantity3">Quantity</div>
          </div>
          <div className="quantity4">
            <div className="quantity5">$3.90</div>
            <div className="quantity6">
              <div className="quantity7">
                <div className="quantity8">-</div>
              </div>
              <div className="quantity9">1</div>
              <div className="quantity10">
                <div className="quantity11">+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-info">+ Additional Info</div>
      </div>
      <div className="buttons">
        <Link to="/pdp" className="buy-now">Buy Now</Link>
      </div>
    </div>
  );
};

ESimPDComp.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default ESimPDComp;
