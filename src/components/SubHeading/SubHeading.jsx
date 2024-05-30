import React from 'react';
import images from '../../constants/images';

import './subheading.css';

const SubHeading = ( {title} ) => {
  return (
    <div style={ {marginBttom: "1rem"} } className={`app__subheading`}>
      <p className="p__cormorant" style={ {textTransform: 'capitalize'} }>{title}</p>
      <img src={images.spoon} alt="spoon"  className='spoon__img'/>
    </div>
  )
}

export default SubHeading