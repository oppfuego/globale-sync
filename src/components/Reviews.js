import Testimonials from "./Testimonials";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ className = "" }) => {
  return (
    <div className={`reviews ${className}`}>
      <div className="reviews-1920x">
        <b className="customer-reviews-hear">
          Customer Reviews: Hear What Our Customers Have to Say
        </b>
        <div className="testimonials1">
          <Testimonials
            images="/images@2x.png"
            millieB="Millie B."
            texasUSA="Texas, USA"
            exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
          />
          <Testimonials
            images="/ellipse-213@2x.png"
            millieB="Sarah T."
            texasUSA="California, USA"
            exceptionalValueWithVeriz="Outstanding service! Verizon TopUp saved the day when I ran out of data mid-streaming. Highly recommend!"
          />
          <Testimonials
            images="/ellipse-213@2x.png"
            millieB="Michael L."
            texasUSA="New York, USA"
            exceptionalValueWithVeriz="Reliable and convenient. Verizon TopUp's quick and easy data replenishment process is a lifesaver for busy professionals like me."
          />
          <Testimonials
            images="/ellipse-213@2x.png"
            millieB="Emily H."
            texasUSA="Texas, USA"
            exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
          />
        </div>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
};

export default Reviews;
