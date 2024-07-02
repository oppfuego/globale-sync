import PropTypes from "prop-types";
import "./Testimonials.css";

const Testimonials = ({
  className = "",
  images,
  millieB,
  texasUSA,
  exceptionalValueWithVeriz,
}) => {
  return (
    <div className={`testimonials ${className}`}>
      <img className="images-icon" alt="" src={images} />
      <div className="names">
        <div className="millie-b">{millieB}</div>
        <div className="texas-usa">{texasUSA}</div>
      </div>
      <div className="quotes">
        <b className="b">“</b>
        <div className="exceptional-value-with">
          {exceptionalValueWithVeriz}
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  images: PropTypes.string,
  millieB: PropTypes.string,
  texasUSA: PropTypes.string,
  exceptionalValueWithVeriz: PropTypes.string,
};

export default Testimonials;
