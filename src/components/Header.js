import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="navigation-links">
        <img
          className="image-1-icon2"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="button-container">
          <img
            className="button-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="menu">
        <div className="menu-items">
          <div className="menu-list">
            <div className="about1">About</div>
          </div>
          <div className="menu-list1">
            <div className="support1">Support</div>
          </div>
          <div className="menu-list2">
            <div className="blog1">Blog</div>
          </div>
          <div className="menu-list3">
            <div className="log-in1">Log in</div>
          </div>
          <button className="button-green2">
            <div className="get-started2">Get Started</div>
          </button>
          <div className="vertical-divider-container">
            <div className="vertical-divider1" />
          </div>
          <div className="language-selector1">
            <div className="language-dropdown">
              <img
                className="global-icon1"
                loading="lazy"
                alt=""
                src="/global.svg"
              />
              <div className="en1">EN</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
