import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({ className = "" }) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="row-separator" />
      <div className="product-color-parent">
        <img
          className="product-color-icon"
          loading="lazy"
          alt=""
          src="/rectangle-521@2x.png"
        />
        <div className="esim-europe-parent">
          <b className="esim-europe1">$400 eSIM (Europe)</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="frame-parent6">
          <div className="parent">
            <b className="b1">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="frame-parent7">
            <div className="plus-button-parent">
              <div className="plus-button">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="b2">3</b>
              <input className="minus-button" type="checkbox" />
            </div>
            <div className="hourly-parent">
              <b className="hourly">Hourly</b>
              <div className="renewal-dropdown">
                <img
                  className="renewal-dropdown-child"
                  alt=""
                  src="/hourly-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="b3">$120.00</b>
      </div>
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
};

export default ItemRow;
