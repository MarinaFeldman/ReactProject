import { useState } from "react";

const TravelSlidesGreece = () => {

  const travelImages = [
"https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1583656696771-2afded31a36c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1590746197887-4420dda1e540?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1580940470227-739a2f0ab9f7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1636589034541-c46fe8f2c3ac?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];


  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % travelImages.length);
  };

  const previous = () => {
    setCurrent((current - 1 + travelImages.length) % travelImages.length);
  };

  return (
    <div className="slide-box">
      <button className="btn" onClick={previous}>⬅️</button>
      <img className="mallorca" src={travelImages[current]} alt={`slide-${current}`} />
      <button className="btn" onClick={next}>➡️</button>
    </div>
  );
};

export default TravelSlidesGreece;
