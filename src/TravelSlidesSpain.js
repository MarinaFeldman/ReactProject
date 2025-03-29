import { useState } from "react";

const TravelSlidesSpain = () => {

  const travelImages = [
"https://images.unsplash.com/photo-1600589169456-e64c7e924d49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1617532407370-75917f566e00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1581201889752-be6ef7c53bc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1619366519767-c7f540466751?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1617350142236-48a406eb780f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default TravelSlidesSpain;
