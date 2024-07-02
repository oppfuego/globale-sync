import Navigation1 from "../components/Navigation1";
import Content1 from "../components/Content1";
import Steps from "../components/Steps";
import Steps1 from "../components/Steps1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./Listing.css";

const Listing = () => {
  return (
    <div className="listing">
      <Navigation1 />
      <Content1 />
      <section className="how-it-works-container-wrapper">
        <div className="how-it-works-container">
          <div className="how-it-works-content">
            <h3 className="how-does-esim1">
              How does eSIM from GlobaleSync work?
            </h3>
            <div className="how-it-works-navigation">
              <img
                className="arrow-left-icon1"
                loading="lazy"
                alt=""
                src="/arrowleft.svg"
              />
              <img
                className="arrow-right-icon1"
                loading="lazy"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
          <div className="how-it-works-steps">
            <Steps image="/image@2x.png" />
            <Steps1
              prop="2"
              chooseTheDestinationaNdES="Choose the destinationa nd eSIM data plan"
              image="/image-1@2x.png"
            />
            <Steps1
              prop="3"
              chooseTheDestinationaNdES="Buy eSIM card most suitable for your needs"
              image="/image-2@2x.png"
            />
            <Steps1
              prop="4"
              chooseTheDestinationaNdES="Enjoy your travel without any worries"
              image="/image-3@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent />
      <FooterDesktop1 />
    </div>
  );
};

export default Listing;
