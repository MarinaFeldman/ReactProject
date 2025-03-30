import { useEffect, useState } from "react";
import "./App.css";
import RecipesRecipes from "./RecipesRecipes";


function Recipes() {
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmited, setWordSubmited] = useState("pailla");
  useEffect(() => {
    const getRecepie = async () => {
      const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmited}&app_id=d073c449&app_key=e7d3e1ba5d4b411897a7f59fb076dcb8`
      );
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    };
    getRecepie();
  }, [wordSubmited]);

  const myRecepieSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmited(mySearch);
  };

  return (
    <div className="App">
      <div>
        <h1>Find a Recipe</h1>
      </div>
      <div>
        <form onSubmit={finalSearch}>
          <input
            className="search"
            placeholder="Search.."
            onChange={myRecepieSearch}
            value={mySearch}
          />
        </form>
      </div>

      <div className="container">
        <button className= "buttonRead" onClick={finalSearch}>SEARCH RECIPE</button>
      </div>

      {myRecipes.map((element, index) => (
        <RecipesRecipes key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingridients={element.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default Recipes;
