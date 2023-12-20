import React, { useState, useEffect } from "react";
import "./index.scss";

const ImagePreloader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return loaded ? (
    <div className="floating-image">
      <img src={src} alt={alt} />
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export const Loader = () => {
  return <div className="dots"></div>;
};

export default ImagePreloader;
