import { useState, useEffect } from "react";

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
    <div className="flex justify-center items-center">
      <img src={src} alt={alt} />
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export const Loader = () => {
  return (
    <div
      className="w-14 h-7 bg-[radial-gradient(circle_at_50%_50%,_rgb(212,220,226)_90%,_transparent)_0%_50%,_radial-gradient(circle_at_50%_50%,_rgb(212,220,226)_90%,_transparent)_50%_50%,_radial-gradient(circle_at_50%_50%,_rgb(212,220,226)_90%,_transparent)_100%_50%] bg-[length:calc(100%_/_3)_13.4px] bg-no-repeat animate-dots"
    ></div>
  );
};

export default ImagePreloader;