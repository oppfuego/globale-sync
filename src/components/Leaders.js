import PropTypes from "prop-types";
import "./Leaders.css";

const Leaders = ({ className = "" }) => {
  return (
    <div className={`leaders ${className}`}>
      <div className="leaders1">
        <div className="item8">
          <img className="image-icon12" alt="" src="/image@2x.png" />
        </div>
        <div className="item9">
          <img className="image-icon13" alt="" src="/image@2x.png" />
        </div>
        <div className="item10">
          <img className="image-icon14" alt="" src="/image@2x.png" />
        </div>
        <div className="item11">
          <img className="image-icon15" alt="" src="/image@2x.png" />
        </div>
        <div className="item12">
          <img className="image-icon16" alt="" src="/image@2x.png" />
        </div>
        <div className="item13">
          <img className="image-icon17" alt="" src="/image@2x.png" />
        </div>
        <div className="item14">
          <b className="network-leaders">50+ Network Leaders</b>
        </div>
      </div>
    </div>
  );
};

Leaders.propTypes = {
  className: PropTypes.string,
};

export default Leaders;
