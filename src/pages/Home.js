import { Link } from "react-router-dom";


function Home() {


  return (
    <div>
      <div className="header">
        <h1>Welcome to my personal web page!</h1>
      </div>

      <div className="text">
        <p>I'm Marina! I love to travel and cook.</p>
        <p>
          On my page, you'll find fun stories about different countries and
          delicious, healthy recipes from the places I've visited. 🌍🍽✨
        </p>
        <p>Delicious recipes and stories from my travels</p>
      </div>

      <div className="button-box">
        <Link to="/Travel" className="buttonRead">
          Start reading..
        </Link>
      </div>
    </div>
  );
}

export default Home;
