import PropTypes from "prop-types";
import "./Header1.css";
import {Link} from "react-router-dom";

const Header1 = ({ className = "" }) => {
  return (
    <div className={`header ${className}`}>
      <Link to="/" className="image-1-parent">
          <img className="image-1-icon" alt="" src="/image-1@2x.png"/>
          <div className="vector-wrapper7">
            <img className="vector-icon10" alt="" src="/vector.svg"/>
          </div>

      </Link>

      <div className="header-inner">
        <div className="frame-group">
          <div className="about-wrapper">
            <div className="about">About</div>
          </div>
          <div className="support-wrapper">
          <div className="support">Support</div>
          </div>
          <div className="blog-wrapper">
            <div className="blog">Blog</div>
          </div>
          <div className="log-in-wrapper">
            <Link to="/sign-in" className="log-in">Log in</Link>
          </div>
          <div className="button-green">
            <Link to="/listing" className="get-started">Get Started</Link>
          </div>
          <div className="vertical-divider-wrapper">
            <div className="vertical-divider" />
          </div>
          <div className="language-selector-wrapper">
            <div className="language-selector">
              <img className="global-icon" alt="" src="/global.svg" />
              <div className="en">EN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
