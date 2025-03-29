import "./App.css";

function RecipesRecipes({label, image, calories, ingridients}) {

    return(
    <div>
    <div>
        <h2>{label}</h2>
    </div>
    <div>
        <img src={image} alt="image"/>
    </div>
    <ul>
        {ingridients.map((ingridient, index) => (
            <li key={index}>
                {ingridient}
            </li>
        ))}
    </ul>
    <div>
        <p>{calories.toFixed()} calories</p>
    </div>
    </div>
    )
}

export default RecipesRecipes;
