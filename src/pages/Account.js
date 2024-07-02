import Main from "../components/Main";
import FrameComponent from "../components/FrameComponent";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <Main />
      <FrameComponent />
      <footer className="footer-desktop">
        <div className="footer-content">
          <div className="frame-parent">
            <div className="image-1-parent">
              <img className="image-1-icon" alt="" src="/image-1-1@2x.png" />
              <div className="vector-wrapper">
                <img className="vector-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
            <div className="explore-a-seamless">
              Explore a seamless blend of hosting services and crypto mining
              capabilities at Global Esync
            </div>
          </div>
          <div className="links-columns-parent">
            <div className="links-columns">
              <b className="important-links">About us</b>
              <div className="about-us">About Us</div>
              <div className="contact-us2">Contact Us</div>
              <div className="agent-contact">Agent Contact</div>
              <div className="services">Services</div>
            </div>
            <div className="links-columns1">
              <b className="important-links1">Countries</b>
              <div className="about-us1">United States</div>
              <div className="contact-us3">Germany</div>
              <div className="agent-contact1">Turkey</div>
              <div className="services1">China</div>
            </div>
            <div className="links-columns2">
              <b className="important-links2">Legal Pages</b>
              <div className="about-us2">Terms</div>
              <div className="contact-us4">Conditions</div>
              <div className="agent-contact2">{`Refund & Cancellation`}</div>
              <div className="services2">Privacy</div>
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
      </footer>
    </div>
  );
};

export default Account;
