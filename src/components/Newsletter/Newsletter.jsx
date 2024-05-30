import React from 'react';
import './newsletter.css';
import SubHeading from '../SubHeading/SubHeading';


const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant" style={{marginTop: '1rem'}}>Subscribe to our newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
        <div className='app__newsletter-input flex__center'>
          <input type="email" name="email" id="email" placeholder='Enter your email address' />
          <button type="button" className="custom__button">Subscribe</button>
        </div>
      </div>
   
    </div>
  )
}

export default Newsletter