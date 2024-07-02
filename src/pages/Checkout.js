import Content from "../components/Content";
import Content2 from "../components/Content2";
import FooterDesktop from "../components/FooterDesktop";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-1920">
      <Content yourCart="Checkout" />
      <Content2 />
      <FooterDesktop image1="/image-1-1@2x.png" />
    </div>
  );
};

export default Checkout;
