import { useState } from "react";

const TravelSlidesLisbon = () => {

  const travelImages = [
"https://images.unsplash.com/photo-1578859651203-c7126a106b59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1562250883-39d8b01616c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1533421821268-87e42c1d70b0?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1577894883290-3b2e2bb21d00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1559163806-3ca824710bf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default TravelSlidesLisbon;
