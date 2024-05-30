import React from "react";
import "./awardcard.css";

const AwardCard = ( { award: {imgUrl, title, subtitle }} ) => {
  return (
    <div className="app__laurels_awards-card" >
      <img src={imgUrl} alt="award" width={50} height={50} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{color: 'var(--color-golden'}}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
