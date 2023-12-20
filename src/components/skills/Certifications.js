import React from 'react';
import './certifications.scss';

const ThreeDBox = () => {
  return (
    <div className="three-d-container">
      <div className="flat-square"></div>
      <div className="standing-image"></div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="certification">
      <h2>3D-Like Box with Standing Image</h2>
      <ThreeDBox />
    </div>
  );
};

export default Certifications;
