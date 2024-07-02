import Header1 from "./Header1";
import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <section className={`navigation ${className}`}>
      <Header1 />
      <div className="hero-banner">
        <h1 className="find-the-perfect">
          Find the perfect eSIM for your travels!
        </h1>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
