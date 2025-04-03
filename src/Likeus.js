import React, { useState } from "react";
import heart1 from "./heart.png";
import heart2 from "./hearts.png";

const Likeus = () => {
  const [message, setMessage] = useState("Like my page");
  const [image, setImage] = useState(heart1);

  const heartClicked = () => {
    setMessage("Love you too!");
    setImage(heart2);
  };

  return (
<div className="likeUs">
<div>
{message}
</div>
<div>
<img onClick={heartClicked} src={image} alt="heart" width="40px" />
</div>   
</div>
  );
};

export default Likeus;