import PropTypes from "prop-types";
import "./FooterDesktop.css";
import {Link} from "react-router-dom";

const FooterDesktop = ({ className = "", image1 }) => {
  return (
    <div className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content1">
            <img className="image-1-icon1" alt="" src={image1} />
            <div className="vector-wrapper8">
              <img className="vector-icon11" alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className="explore-a-seamless">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at Global Esync
          </div>
        </div>
        <div className="links">
          <div className="links1">
            <b className="important-links">About us</b>
            <div className="about-us">About Us</div>
            <div className="contact-us">Contact Us</div>
            <div className="agent-contact">Agent Contact</div>
            <div className="services">Services</div>
          </div>
          <div className="links2">
            <b className="important-links1">Countries</b>
            <div className="about-us1">United States</div>
            <div className="contact-us1">Germany</div>
            <div className="agent-contact1">Turkey</div>
            <div className="services1">China</div>
          </div>
          <div className="links3">
            <b className="important-links2">Legal Pages</b>
            <Link to="/terms" className="about-us2">
              Terms
            </Link>
            <div className="contact-us2">Conditions</div>
            <Link to="/cancellation" className="contact-us2"> Refund & Cancellation
            </Link>
            <Link to="/policy" className="services2"> Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="globalesync-all-rights">
          © 2023 GlobalEsync. All Rights Reserved.
        </div>
        <div className="legal-menu">
          <div className="privacy-policy">Privacy Policy</div>
          <div className="tearms-conditions">{`Tearms & Conditions`}</div>
        </div>
      </div>

      <div className="footer-bottom-content">
        <p>CelestialCipher LLC</p>
        <p>License number: 2325919</p>
        <p>Sharjah Media City (Shams), Al Messaned, Al Bataeh, Sharjah, United Arab Emirates</p>
      </div>
    </div>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
};

export default FooterDesktop;
