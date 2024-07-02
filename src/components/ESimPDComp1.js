import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ESimPDComp1.css";

const ESimPDComp1 = ({ className = "", propLeft, propTop }) => {
  const eSimPDComp1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`esim-pd-comp1 ${className}`} style={eSimPDComp1Style}>
      <h3 className="gb-7-days2">1GB 7 Days - Europe</h3>
      <div className="group-div">
        <div className="feature-highlights-parent">
          <div className="feature-highlights">
            <div className="feature-icons">
              <img className="medal-star-icon5" alt="" src="/medalstar.svg" />
            </div>
            <div className="gb-7-days3">1GB 7 Days - Europe</div>
          </div>
          <div className="data-values">
            <div className="gb1">1GB</div>
            <div className="data-info">
              <img className="info-circle-icon4" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="loadable-containers-parent">
          <div className="loadable-containers">
            <div className="loadable-highlights">
              <img className="medal-star-icon6" alt="" src="/medalstar.svg" />
            </div>
            <div className="loadable1">Loadable</div>
          </div>
          <div className="availability-indicators">
            <div className="yes1">Yes</div>
            <div className="availability-info">
              <img className="info-circle-icon5" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="duration-containers-parent">
          <div className="duration-containers">
            <div className="duration-highlights">
              <img className="medal-star-icon7" alt="" src="/medalstar.svg" />
            </div>
            <div className="duration1">Duration</div>
          </div>
          <div className="duration-values">
            <div className="days1">7 Days</div>
            <div className="duration-info">
              <img className="info-circle-icon6" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="price-containers-parent">
          <div className="price-containers">
            <div className="price-highlights">
              <img className="medal-star-icon8" alt="" src="/medalstar.svg" />
            </div>
            <div className="price1">Price</div>
          </div>
          <div className="price-values">
            <div className="price-amount">$3.90</div>
            <div className="price-info">
              <img className="info-circle-icon7" alt="" src="/infocircle.svg" />
            </div>
          </div>
        </div>
        <div className="quantity-containers-parent">
          <div className="quantity-containers">
            <div className="quantity-highlights">
              <img className="medal-star-icon9" alt="" src="/medalstar.svg" />
            </div>
            <div className="quantity12">Quantity</div>
          </div>
          <div className="quantity-values">
            <div className="quantity-amount">$3.90</div>
            <div className="quantity-info">
              <div className="quantity-details">
                <div className="quantity-data">-</div>
              </div>
              <div className="quantity-units">1</div>
              <div className="quantity-actions">
                <div className="quantity-options">+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-info1">+ Additional Info</div>
      </div>
      <button className="action-buttons">
        <div className="buy-now1">Buy Now</div>
      </button>
    </div>
  );
};

ESimPDComp1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default ESimPDComp1;
