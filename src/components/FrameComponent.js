import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`f-a-q-list-wrapper ${className}`}>
      <div className="f-a-q-list">
        <div className="f-a-q-title1">
          <h1 className="faq-about-virtual1">
            FAQ about virtual SIM cards from GlobaleSync
          </h1>
        </div>
        <div className="f-a-q-items" />
        <div className="f-a-q-items1">
          <div className="what-are-the1">
            What are the benefits of using private virtual numbers?
          </div>
          <div className="f-a-q-icons">
            <img className="f-a-q-icon" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items2" />
        <div className="f-a-q-items3">
          <div className="how-do-i3">
            How do I get and activate a Brandname cloud based number?
          </div>
          <div className="vector-wrapper9">
            <img className="vector-icon12" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items4" />
        <div className="f-a-q-items5">
          <div className="how-do-i4">
            How do I check messages for a virtual mobile number?
          </div>
          <div className="vector-wrapper10">
            <img className="vector-icon13" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items6" />
        <div className="f-a-q-items7">
          <div className="how-do-i5">
            How do I disable my subscription for a virtual phone number?
          </div>
          <div className="vector-wrapper11">
            <img className="vector-icon14" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items8" />
        <div className="f-a-q-items9">
          <div className="are-virtual-mobile1">
            Are virtual mobile numbers safe? How can they be identified?
          </div>
          <div className="vector-wrapper12">
            <img className="vector-icon15" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items10" />
        <div className="f-a-q-items11">
          <div className="can-i-use1">
            Can I use my virtual mobile number for registration and texting in
            messengers?
          </div>
          <div className="vector-wrapper13">
            <img className="vector-icon16" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items12" />
        <div className="f-a-q-items13">
          <div className="can-globalesyncs-virtual1">
            Can GlobaleSync's virtual cell phone number be used as my second
            phone number on the same device?
          </div>
          <div className="vector-wrapper14">
            <img className="vector-icon17" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items14" />
        <div className="f-a-q-items15">
          <div className="can-virtual-cell1">
            Can virtual cell phone numbers be used for SMS account verification?
          </div>
          <div className="vector-wrapper15">
            <img className="vector-icon18" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items16" />
        <div className="f-a-q-items17">
          <div className="in-which-countries1">
            In which countries can GlobaleSync's virtual 2nd line numbers be
            used?
          </div>
          <div className="vector-wrapper16">
            <img className="vector-icon19" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items18" />
        <div className="f-a-q-items19">
          <div className="is-a-virtual1">
            Is a virtual telephone number legal?
          </div>
          <div className="vector-wrapper17">
            <img className="vector-icon20" alt="" src="/vector1.svg" />
          </div>
        </div>
        <div className="f-a-q-items20" />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
