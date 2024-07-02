import Header1 from "../components/Header1";
import InfoCollection from "../components/InfoCollection";
import InfoUsage from "../components/InfoUsage";
import FooterDesktop from "../components/FooterDesktop";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      <Header1 />
      <div className="terms">
        <h1 className="terms-and-conditions">Terms and Conditions</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </div>
      <main className="lilylamb-kids-we-us-or-parent">
        <div className="lilylamb-kids-we">
          LilyLamb Kids ("we," "us," or "our") values your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you use our website, products, and services.
        </div>
        <InfoCollection />
        <InfoUsage />
        <section className="privacy-points">
          <h1 className="data-security">
            <p className="data-security1">
              3. Data Security
            </p>
          </h1>
          <div className="we-take-reasonable">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no data transmission or storage can be guaranteed to be
            completely secure. Please use caution when sharing personal
            information online.
          </div>
        </section>
        <div className="privacy-points1">
          <h1 className="third-party-services">
            <p className="third-party-services1">
              4. Third-Party Services
            </p>
          </h1>
          <div className="we-may-use">
            We may use third-party service providers to assist us in delivering
            our services. These providers may have access to your information
            for specific purposes, but they are obligated to maintain the
            confidentiality and security of your data.
          </div>
        </div>
        <section className="privacy-points2">
          <h1 className="cookies-and-tracking-container">

            <p className="third-party-services1">
              5. Cookies and Tracking Technologies
            </p>
          </h1>
          <div className="we-use-cookies">
            We use cookies and similar tracking technologies to collect and
            store information about your interactions with our website. You can
            manage your cookie preferences through your browser settings.
          </div>
        </section>
        <section className="privacy-points3">
          <h1 className="your-choices">

            <p className="third-party-services1">
              6. Your Choices
            </p>
          </h1>
          <div className="you-have-the">
            You have the right to access, update, or delete your personal
            information. You can also unsubscribe from marketing communications
            at any time. To exercise these rights or for any privacy-related
            inquiries, please contact us at LilyLamb Kids.
          </div>
        </section>
        <div className="privacy-points4">
          <h1 className="changes-to-this-container">
            <p className="third-party-services1">
              7. Changes to this Privacy Policy
            </p>
          </h1>
          <div className="we-may-update">
            We may update this Privacy Policy to reflect changes in our data
            practices. Any updates will be posted on this page with an updated
            effective date. Please review this Privacy Policy periodically to
            stay informed about our privacy practices.
          </div>
        </div>
        <section className="privacy-points5">
          <h1 className="contact-us">

            <p className="third-party-services1">
              8. Contact Us
            </p>
          </h1>
          <div className="if-you-have-container">
            <p className="if-you-have">
            If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="by-using-our">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </section>
      </main>
      <FooterDesktop image1="/image-1@2x.png" />
    </div>
  );
};

export default TermsConditions;
