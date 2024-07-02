import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="item-row1">
            <div className="header3">
              <div className="header-child" />
              <div className="product-label">
                <b className="product">Product</b>
              </div>
              <div className="price-quantity">
                <b className="price3">Price</b>
                <b className="quantity13">Quantity</b>
              </div>
              <b className="total">Total</b>
            </div>
            <div className="item-details">
              <img
                className="item-info-divider"
                loading="lazy"
                alt=""
                src="/rectangle-521@2x.png"
              />
              <div className="item-title">
                <b className="esim-europe2">$400 eSIM (Europe)</b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
              <div className="item-actions">
                <div className="quantity14">
                  <b className="quantity-placeholder">$120.00</b>
                  <b className="credits1">12 Credits</b>
                </div>
                <div className="increase-quantity">
                  <div className="plus-button1">
                    <div className="quantity-control-buttons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <b className="increase-placeholder">3</b>
                    <input
                      className="quantity-control-buttons1"
                      type="checkbox"
                    />
                  </div>
                  <div className="time-period">
                    <b className="hourly1">Hourly</b>
                    <div className="frequency-dropdown">
                      <img
                        className="hourly-placeholder-icon"
                        alt=""
                        src="/hourly-placeholder.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <b className="item-separator">$120.00</b>
            </div>
          </div>
          <ItemRow />
          <ItemRow />
          <div className="action-buttons1">
            <div className="action-buttons-child" />
            <div className="action-buttons2">
              <button className="button">
                <img className="tag-icon" alt="" src="/tag-icon.svg" />
                <b className="button1">Go Back</b>
                <img className="tag-icon1" alt="" src="/tag-icon.svg" />
              </button>
              <button className="button2">
                <img className="tag-icon2" alt="" src="/tag-icon.svg" />
                <b className="button3">Checkout</b>
                <img className="tag-icon3" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header4">
              <b className="checkout-details1">Checkout Details</b>
            </div>
          </div>
          <div className="summary-details-container">
            <div className="summary-labels">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="additional-charges">
            <div className="charge-details">
              <div className="charge-labels">
                <b className="shipping-handling">{`Shipping & Handling`}</b>
                <b className="other-taxes">Other Taxes</b>
              </div>
              <div className="charge-labels1">
                <b className="b4">$0.00</b>
                <b className="b5">$0.00</b>
              </div>
            </div>
          </div>
          <div className="charges-divider">
            <div className="charges-divider-child" />
          </div>
          <div className="summary-details-container1">
            <div className="grand-total-parent">
              <b className="grand-total">Grand Total</b>
              <b className="b6">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
