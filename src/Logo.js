import React from 'react';
import './Logo.css';
function Logo() {
    return (
      <div className="logo">
        {/* Create elements for each shape in the logo */}
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
        <div className="text">HTML & CSS</div>
        <div className="author">Jon Duckett</div>
      </div>
    );
  }

  export default Logo