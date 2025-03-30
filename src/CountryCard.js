import { useNavigate } from "react-router-dom";

const CountryCard = ({ country, city, description, dish, recipeLink,  CountryImage}) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{country}</h2>
      <h3>{city}</h3>

<div className="description">
      {(Array.isArray(description) ? description : [description]).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

  <h4>
      Famous dish:
  </h4>
  <p className="description">
  {dish}
  </p>
  <button className="seeRecepieButton" onClick={() => navigate(recipeLink)}>
        See recipe here...
    </button>
</div>
  <div className="hedder">
  <h3>See photos:</h3> 
  </div>  
  <div className="image-box">
  {CountryImage}
  </div> 
    </div>
  );
};

export default CountryCard;
