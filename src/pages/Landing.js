import Header1 from "../components/Header1";
import FrameComponent1 from "../components/FrameComponent1";
import CountryListing1920x from "../components/CountryListing1920x";
import FrameComponent2 from "../components/FrameComponent2";
import Steps from "../components/Steps";
import Steps1 from "../components/Steps1";
import Items from "../components/Items";
import Leaders from "../components/Leaders";
import Reviews from "../components/Reviews";
import FooterDesktop from "../components/FooterDesktop";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="header-parent">
        <Header1 />
        <FrameComponent1 />
      </div>
      <CountryListing1920x />
      <FrameComponent2 />
      <div className="work">
        <div className="work1">
          <div className="work-title">
            <div className="how-does-esim">
              How does eSIM from GlobaleSync work?
            </div>
            <div className="arrow-left-parent">
              <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
              <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <div className="steps">
            <Steps image="/image@2x.png" />
            <Steps1
              prop="2"
              chooseTheDestinationaNdES="Choose the destinationa nd eSIM data plan"
              image="/image@2x.png"
            />
            <Steps1
              prop="3"
              chooseTheDestinationaNdES="Buy eSIM card most suitable for your needs"
              image="/image@2x.png"
            />
            <Steps1
              prop="4"
              chooseTheDestinationaNdES="Enjoy your travel without any worries"
              image="/image@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="landing-inner">
        <div className="heading-2-supported-networks-parent">
          <b className="heading-2">Supported networks</b>
          <div className="our-industry-leading-carriers">
            Our industry-leading carriers ensure quality and deliver seamless
            connectivity anywhere, anytime
          </div>
        </div>
      </div>
      <Items />
      <div className="landing-child">
        <div className="heading-2-supported-networks-group">
          <b className="heading-21">Our Partners</b>
          <div className="we-are-trusted">
            We are trusted by leading connectivity, media and technology brands
            around the world
          </div>
        </div>
      </div>
      <Leaders />
      <Reviews />
      <div className="f-a-q">
        <div className="f-a-q1">
          <div className="f-a-q-title">
            <b className="faq-about-virtual">
              FAQ about virtual SIM cards from GlobaleSync
            </b>
          </div>
          <div className="questions" />
          <div className="questions1">
            <div className="what-are-the">
              What are the benefits of using private virtual numbers?
            </div>
            <div className="vector-wrapper">
              <img className="vector-icon" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions2" />
          <div className="questions3">
            <div className="how-do-i">
              How do I get and activate a Brandname cloud based number?
            </div>
            <div className="vector-container">
              <img className="vector-icon1" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions4" />
          <div className="questions5">
            <div className="how-do-i1">
              How do I check messages for a virtual mobile number?
            </div>
            <div className="vector-frame">
              <img className="vector-icon2" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions6" />
          <div className="questions7">
            <div className="how-do-i2">
              How do I disable my subscription for a virtual phone number?
            </div>
            <div className="frame-div">
              <img className="vector-icon3" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions8" />
          <div className="questions9">
            <div className="are-virtual-mobile">
              Are virtual mobile numbers safe? How can they be identified?
            </div>
            <div className="vector-wrapper1">
              <img className="vector-icon4" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions10" />
          <div className="questions11">
            <div className="can-i-use">
              Can I use my virtual mobile number for registration and texting in
              messengers?
            </div>
            <div className="vector-wrapper2">
              <img className="vector-icon5" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions12" />
          <div className="questions13">
            <div className="can-globalesyncs-virtual">
              Can GlobaleSync's virtual cell phone number be used as my second
              phone number on the same device?
            </div>
            <div className="vector-wrapper3">
              <img className="vector-icon6" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions14" />
          <div className="questions15">
            <div className="can-virtual-cell">
              Can virtual cell phone numbers be used for SMS account
              verification?
            </div>
            <div className="vector-wrapper4">
              <img className="vector-icon7" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions16" />
          <div className="questions17">
            <div className="in-which-countries">
              In which countries can GlobaleSync's virtual 2nd line numbers be
              used?
            </div>
            <div className="vector-wrapper5">
              <img className="vector-icon8" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions18" />
          <div className="questions19">
            <div className="is-a-virtual">
              Is a virtual telephone number legal?
            </div>
            <div className="vector-wrapper6">
              <img className="vector-icon9" alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className="questions20" />
        </div>
      </div>
      <FooterDesktop image1="/image-1@2x.png" />
    </div>
  );
};

export default Landing;
