import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

import LazyLoad from "react-lazy-load";

import "./header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <LazyLoad>
          <img src={images.welcome} alt="header welcome" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Header;
