import { useNavigate } from "react-router-dom";


function Home(){

const navigate = useNavigate();

return(
<div>
<div className="header">
<h1>Welcome to my personal web pege!</h1>
</div>

<div className="text">
<p>I'm Marina! I love to travel and cook.</p>

<p>On my page, you'll find fun stories about different countries and delicious, healthy recipes from the places I've visited. 🌍🍽✨</p>
<p>Delicious recipes and stories from my travels</p>
</div>

<div className="button-box">
    <button className= "buttonRead" onClick={() => navigate("/Travel")}>Start reading..</button>
</div>
</div>
)}

export default Home;