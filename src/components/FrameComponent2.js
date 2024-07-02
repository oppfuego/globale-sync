import ESimPDComp from "./ESimPDComp";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`select-country-container-wrapper ${className}`}>
      <div className="select-country-container">
        <div className="select-country-content">
          <div className="select-country-title">
            <b className="select-available-countries">
              Select Available Countries
            </b>
            <div className="form-field">
              <div className="form-label">Type Here</div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="popular-countries-parent">
            <b className="popular-countries1">Popular Countries</b>
            <div className="popular-country-blocks">
              <div className="country-block-1">
                <img
                  className="popular-country-icons"
                  alt=""
                  src="/popular-country-icons.svg"
                />
                <div className="nepal">Nepal</div>
              </div>
              <div className="country-block-5">
                <img
                  className="flagspakistan-icon"
                  alt=""
                  src="/flagspakistan.svg"
                />
                <div className="pakistan">Pakistan</div>
              </div>
              <div className="country-block-4">
                <img className="flagsindia-icon" alt="" src="/flagsindia.svg" />
                <div className="india">India</div>
              </div>
              <div className="country-block-3">
                <img
                  className="flagsunited-states-icon"
                  alt=""
                  src="/flagsunited-states.svg"
                />
                <div className="usa">USA</div>
              </div>
              <div className="country-block-6">
                <img
                  className="flagsmonaco-icon"
                  alt=""
                  src="/flagsmonaco.svg"
                />
                <div className="monaco">Monaco</div>
              </div>
              <div className="country-block-7">
                <img
                  className="flagsthailand-icon"
                  alt=""
                  src="/flagsthailand.svg"
                />
                <div className="thailand">Thailand</div>
              </div>
              <div className="country-block-8">
                <img
                  className="flagsunited-arab-emirates"
                  alt=""
                  src="/flagsunited-arab-emirates.svg"
                />
                <div className="dubai">Dubai</div>
              </div>
              <div className="country-block-9">
                <img className="add-circle-icon" alt="" src="/addcircle.svg" />
                <div className="explore-more">Explore More</div>
              </div>
            </div>
          </div>
        </div>
        <div className="listing1">
          <div className="plan-filter">
            <div className="sort-by-container">
              <div className="sort-by">Sort By:</div>
              <div className="form-field1">
                <div className="form-label1">Most Popular</div>
                <img className="icon1" alt="" src="/icon1.svg" />
              </div>
            </div>
            <div className="clear-filter">
              <img className="rotate-left-icon" alt="" src="/rotateleft.svg" />
              <div className="clear-all-filters">Clear All Filters</div>
            </div>
          </div>
          <div className="plan-cards">
            <ESimPDComp />
            <ESimPDComp propLeft="425px" propTop="0px" />
            <ESimPDComp propLeft="850px" propTop="0px" />
            <ESimPDComp propLeft="0px" propTop="543px" />
            <ESimPDComp propLeft="425px" propTop="543px" />
            <ESimPDComp propLeft="850px" propTop="543px" />
            <ESimPDComp propLeft="0px" propTop="1086px" />
            <ESimPDComp propLeft="425px" propTop="1086px" />
            <ESimPDComp propLeft="850px" propTop="1086px" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
