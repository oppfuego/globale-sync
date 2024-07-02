import Header1 from "../components/Header1";
import PDPShowcase1920x from "../components/PDPShowcase1920x";
import Steps from "../components/Steps";
import Steps1 from "../components/Steps1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./PDP.css";

const PDP = () => {
  return (
    <div className="pdp">
      <Header1 />
      <PDPShowcase1920x />
      <section className="pdp-inner">
        <div className="frame-parent">
          <div className="how-does-esim-from-globalesync-parent">
            <h3 className="how-does-esim2">
              How does eSIM from GlobaleSync work?
            </h3>
            <div className="arrow-left-group">
              <img
                className="arrow-left-icon2"
                loading="lazy"
                alt=""
                src="/arrowleft.svg"
              />
              <img
                className="arrow-right-icon2"
                loading="lazy"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
          <div className="steps-parent">
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

export default PDP;
