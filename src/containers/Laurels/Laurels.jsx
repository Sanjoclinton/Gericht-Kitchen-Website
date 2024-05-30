import "./laurels.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";

import AwardCard from "../../components/AwardCard/AwardCard";
import LazyLoad from "react-lazy-load";

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards ">
          {data.awards.map((award, index) => (
            <AwardCard key={award.title + index} award={award} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <LazyLoad>
          <img src={images.laurels} alt="laurels" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Laurels;
