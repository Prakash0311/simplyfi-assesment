import React from 'react';
import './Logo.css';
const Logo = () => {
  return(
    <div className='logo-container'>
      <div className='diamond-container'>
        <div className='diamond-information'>
          <h1 className='main-heading'>HTML <span className='spanElement'>&</span> CSS</h1>
          <p className='main-para'>design and build websites</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
