import { useState } from "react";
import CountryCard from "./CountryCard";
import { travelData } from "./TravelData";



const Travel = () => {
  const [search, setSearch] = useState("");

  const filteredCountries = travelData.filter(
    (country) =>
      country.country.toLowerCase().includes(search.toLowerCase()) ||
      country.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search country or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="countries">
        <h1>MY TRAVEL JOURNEY</h1>
        {filteredCountries.length > 0 ? (
          filteredCountries.map((data) => <CountryCard key={data.id} {...data} />)
        ) : (
          <p>No results found.</p>
        )}
      </div>

    </div>
  );
};

export default Travel;
