import LazyLoad from "react-lazy-load";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./findus.css";

const FindUs = () => {
  return (
    <div className="app__wrapper section__padding" id="contacts">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ margin: "1rem 0 3rem 0" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p className="p__cormorant" style={{ margin: "2rem 0" }}>
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>

        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <LazyLoad>
          <img src={images.findus} alt="find us" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default FindUs;
