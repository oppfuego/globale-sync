import CountryItems from "./CountryItems";
import PropTypes from "prop-types";
import "./CountryListing1920x.css";

const CountryListing1920x = ({ className = "" }) => {
  return (
    <div className={`country-listing-1920x ${className}`}>
      <div className="popular-countries-title">
        <b className="popular-countries">Popular Countries</b>
      </div>
      <div className="country-list">
        <CountryItems flagAF="/flagaf.svg" afghanistan="Afghanistan" />
        <CountryItems flagAF="/flagal.svg" afghanistan="Albania" />
        <CountryItems flagAF="/flagad.svg" afghanistan="Andorra" />
        <CountryItems flagAF="/flagai.svg" afghanistan="Anguilla" />
        <CountryItems flagAF="/flagar.svg" afghanistan="Argentina" />
        <CountryItems flagAF="/flagag.svg" afghanistan="Antigua and Barbuda" />
        <CountryItems flagAF="/flagae.svg" afghanistan="Arab Emirates" />
        <CountryItems flagAF="/flagau.svg" afghanistan="Australia" />
        <CountryItems flagAF="/flagbd.svg" afghanistan="Bangladesh" />
        <CountryItems flagAF="/flagbe.svg" afghanistan="Belgium" />
        <CountryItems flagAF="/flagcn.svg" afghanistan="China" />
        <CountryItems flagAF="/flagck.svg" afghanistan="Cook Islands" />
        <CountryItems flagAF="/flagfr.svg" afghanistan="France" />
        <CountryItems flagAF="/flagin.svg" afghanistan="India" />
        <CountryItems flagAF="/flagjp.svg" afghanistan="Japan" />
        <CountryItems flagAF="/flagmy.svg" afghanistan="Malaysia" />
        <CountryItems flagAF="/flagnp.svg" afghanistan="Nepal" />
        <CountryItems flagAF="/flagnz.svg" afghanistan="New Zealand" />
        <CountryItems flagAF="/flagno.svg" afghanistan="Norway" />
        <CountryItems flagAF="/flagpk.svg" afghanistan="Pakistan" />
        <CountryItems flagAF="/flagru.svg" afghanistan="Russia" />
        <CountryItems flagAF="/flagse.svg" afghanistan="Sweden" />
        <CountryItems flagAF="/flaglk.svg" afghanistan="Sri Lanka" />
        <CountryItems flagAF="/flagsd.svg" afghanistan="Sudan" />
        <CountryItems flagAF="/flagtr.svg" afghanistan="Turkey" />
        <CountryItems flagAF="/flagug.svg" afghanistan="Uganda" />
        <CountryItems flagAF="/flagvn.svg" afghanistan="Vietnam" />
        <CountryItems flagAF="/flagye.svg" afghanistan="Yemen" />
      </div>
      <div className="country-list-button">
        <div className="button-green1">
          <div className="get-started1">Show all eSIMS cards</div>
        </div>
      </div>
    </div>
  );
};

CountryListing1920x.propTypes = {
  className: PropTypes.string,
};

export default CountryListing1920x;
