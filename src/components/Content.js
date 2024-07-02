import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "", yourCart }) => {
  return (
    <section className={`content1 ${className}`}>

      <div className="content-inner">
        <div className="cart-title-parent">
          <div className="cart-title">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default Content;
