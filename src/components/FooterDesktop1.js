import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer-content2">
        <div className="footer-top">
          <div className="logo-container">
            <img className="image-1-icon3" alt="" src="/image-1-1@2x.png" />
            <div className="vector-wrapper18">
              <img className="vector-icon21" alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className="explore-a-seamless1">
            Explore a seamless blend of hosting services and crypto mining
            capabilities at Global Esync
          </div>
        </div>
        <div className="footer-links">
          <div className="link-columns">
            <h3 className="important-links3">About us</h3>
            <div className="about-us3">About Us</div>
            <div className="contact-us3">Contact Us</div>
            <div className="agent-contact3">Agent Contact</div>
            <div className="services3">Services</div>
          </div>
          <div className="link-columns1">
            <h3 className="important-links4">Countries</h3>
            <div className="about-us4">United States</div>
            <div className="contact-us4">Germany</div>
            <div className="agent-contact4">Turkey</div>
            <div className="services4">China</div>
          </div>
          <div className="link-columns2">
            <h3 className="important-links5">Legal Pages</h3>
            <div className="about-us5">Terms</div>
            <div className="contact-us5">Conditions</div>
            <div className="agent-contact5">{`Refund & Cancellation`}</div>
            <div className="services5">Privacy</div>
          </div>
        </div>
      </div>
      <div className="footer-menu1">
        <div className="globalesync-all-rights1">
          © 2023 GlobalEsync. All Rights Reserved.
        </div>
        <div className="legal-menu1">
          <div className="privacy-policy1">Privacy Policy</div>
          <div className="tearms-conditions1">{`Tearms & Conditions`}</div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
