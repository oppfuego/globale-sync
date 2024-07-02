import ESimPDComp1 from "./ESimPDComp1";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="country-selection">
        <div className="country-input-parent">
          <div className="country-input">
            <h1 className="select-available-countries1">
              Select Available Countries
            </h1>
            <div className="form-field2">
              <input
                className="form-label2"
                placeholder="Type Here"
                type="text"
              />
              <img className="icon2" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="popular-countries-group">
            <h1 className="popular-countries2">Popular Countries</h1>
            <div className="country-list1">
              <div className="country-block-11">
                <img
                  className="country-flags-icon"
                  alt=""
                  src="/popular-country-icons.svg"
                />
                <div className="nepal1">Nepal</div>
              </div>
              <div className="country-block-51">
                <img
                  className="flagspakistan-icon1"
                  alt=""
                  src="/flagspakistan.svg"
                />
                <div className="pakistan1">Pakistan</div>
              </div>
              <div className="country-block-41">
                <img
                  className="flagsindia-icon1"
                  alt=""
                  src="/flagsindia.svg"
                />
                <div className="india1">India</div>
              </div>
              <div className="country-block-31">
                <img
                  className="flagsunited-states-icon1"
                  alt=""
                  src="/flagsunited-states.svg"
                />
                <div className="usa1">USA</div>
              </div>
              <div className="country-block-61">
                <img
                  className="flagsmonaco-icon1"
                  alt=""
                  src="/flagsmonaco.svg"
                />
                <div className="monaco1">Monaco</div>
              </div>
              <div className="country-block-71">
                <img
                  className="flagsthailand-icon1"
                  alt=""
                  src="/flagsthailand.svg"
                />
                <div className="thailand1">Thailand</div>
              </div>
              <div className="country-block-81">
                <img
                  className="flagsunited-arab-emirates1"
                  alt=""
                  src="/flagsunited-arab-emirates.svg"
                />
                <div className="dubai1">Dubai</div>
              </div>
              <div className="country-block-91">
                <img
                  className="add-circle-icon1"
                  loading="lazy"
                  alt=""
                  src="/addcircle.svg"
                />
                <div className="explore-more1">Explore More</div>
              </div>
            </div>
          </div>
        </div>
        <div className="listing2">
          <div className="sort-options-parent">
            <div className="sort-options">
              <div className="sort-by1">Sort By:</div>
              <div className="form-field3">
                <div className="form-label3">Most Popular</div>
                <img className="icon3" alt="" src="/icon1.svg" />
              </div>
            </div>
            <div className="filter-actions">
              <img className="rotate-left-icon1" alt="" src="/rotateleft.svg" />
              <div className="clear-all-filters1">Clear All Filters</div>
            </div>
          </div>
          <div className="product-cards">
            <ESimPDComp1 />
            <ESimPDComp1 propLeft="425px" propTop="0px" />
            <ESimPDComp1 propLeft="850px" propTop="0px" />
            <ESimPDComp1 propLeft="0px" propTop="543px" />
            <ESimPDComp1 propLeft="425px" propTop="543px" />
            <ESimPDComp1 propLeft="850px" propTop="543px" />
            <ESimPDComp1 propLeft="0px" propTop="1086px" />
            <ESimPDComp1 propLeft="425px" propTop="1086px" />
            <ESimPDComp1 propLeft="850px" propTop="1086px" />
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
