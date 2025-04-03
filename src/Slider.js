import { useState } from "react";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  const previous = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="slide-box">
      <button className="btn" onClick={previous}>⬅️</button>
      <img className="mallorca" src={images[current]} alt={`slide-${current}`} />
      <button className="btn" onClick={next}>➡️</button>
    </div>
  );
};

export default Slider;
