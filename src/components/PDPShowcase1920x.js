import PropTypes from "prop-types";
import "./PDPShowcase1920x.css";

const PDPShowcase1920x = ({ className = "" }) => {
  return (
    <section className={`pdp-showcase-1920x ${className}`}>
      <div className="product-image-parent">
        <img
          className="product-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-52@2x.png"
        />
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="esim-europe-1gb-5-days-3-wrapper">
              <h1 className="esim-europe">
                eSIM Europe | 1GB | 5 Days | 35 Countries
              </h1>
            </div>
            <div className="frame-parent3">
              <div className="frame-wrapper">
                <div className="stars-parent">
                  <img
                    className="stars-icon"
                    loading="lazy"
                    alt=""
                    src="/frame-1000003267.svg"
                  />
                  <img
                    className="star-icon"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="star-icon1"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="star-icon2"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="star-icon3"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                </div>
              </div>
              <div className="based-on-0-container">
                {`Based on 0 reviews. `}
                <span className="write-a-review">Write a review</span>
              </div>
            </div>
            <div className="price-parent">
              <b className="price2">$3.95</b>
              <div className="ex-tax-395">Ex Tax: $3.95</div>
            </div>
            <div className="brand-name-parent">
              <div className="brand-name">{`Brand Name: `}</div>
              <div className="esim-profile-regional">
                eSIM Profile: Regional | 35 Countries
              </div>
            </div>
            <div className="desired-delivery-date-of-the-q-parent">
              <div className="desired-delivery-date">
                Desired delivery date of the QR code
              </div>
              <div className="frame-parent4">
                <div className="calendar-elements-parent">
                  <div className="calendar-elements">
                    <div className="eg-31122023">e.g. 31.12.2023</div>
                  </div>
                  <button className="calendar-elements1">
                    <div className="add-to-cart">Add to Cart</div>
                  </button>
                </div>
                <img
                  className="calendar-icon"
                  loading="lazy"
                  alt=""
                  src="/calendar.svg"
                />
              </div>
            </div>
          </div>
          <h1 className="features">Features</h1>
          <div className="frame-child" />
        </div>
      </div>
      <div className="esim-profile-specifications-parent">
        <h3 className="esim-profile-specifications">
          eSIM Profile Specifications
        </h3>
        <div className="data-package-parent">
          <div className="data-package">Data Package</div>
          <div className="gb2">1 GB</div>
        </div>
        <div className="frame-parent5">
          <div className="validity-parent">
            <div className="validity">Validity</div>
            <div className="days2">5 Days</div>
          </div>
          <div className="network-coverage-parent">
            <div className="network-coverage">Network Coverage</div>
            <div className="andorra-austria-belgium">{`Andorra, Austria, Belgium, Bulgaria, Czech republic, Croatia, Cyprus< Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland Portugal, Romania, Solvak Republic, aSlovenia, Spain, Sweden, Switzerland, Turkey, United Kingdom`}</div>
          </div>
        </div>
      </div>
      <div className="pdp-showcase-1920x-child" />
      <div className="pdp-showcase-1920x-inner">
        <div className="esim-profile-policies-parent">
          <h3 className="esim-profile-policies">eSIM Profile Policies</h3>
          <div className="policies">
            <div className="activation-policy">Activation Policy</div>
            <div className="activation-on-first">
              Activation on first data usage
            </div>
          </div>
          <div className="policies1">
            <div className="refund-policy">Refund Policy</div>
            <div className="non-refundable">Non Refundable</div>
          </div>
          <div className="policies2">
            <div className="fair-use-policy">Fair Use Policy</div>
            <div className="gb-at-high">1GB at High Speed, then Data off</div>
          </div>
          <div className="hotspot-tethering-mifi-r-parent">
            <div className="hotspot-tethering">
              Hotspot / Tethering / MiFi / Routers
            </div>
            <div className="allowed-wrapper">
              <div className="allowed">Allowed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pdp-showcase-1920x-item" />
    </section>
  );
};

PDPShowcase1920x.propTypes = {
  className: PropTypes.string,
};

export default PDPShowcase1920x;
