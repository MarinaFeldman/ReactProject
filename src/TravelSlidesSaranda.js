import { useState } from "react";

const TravelSlidesSaranda = () => {

  const travelImages = [
"https://images.unsplash.com/photo-1628885680104-ed2b88ba6fbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1647375422620-a276b2baed30?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1668068194065-2bc4cab77e6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1665758362878-beff3f919a2b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1568101231690-683ff520748e?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default TravelSlidesSaranda;
