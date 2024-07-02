import Content from "../components/Content";
import CartItems from "../components/CartItems";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <Content yourCart="Your Cart" />
      <CartItems />
      <FooterDesktop image1="/image-1-1@2x.png" />
    </div>
  );
};

export default CartDetails;
