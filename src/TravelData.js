import TravelSlidesItaly from "./TravelSlidesItaly";
import TravelSlidesGreece from "./TravelSlidesGreece";
import TravelSlidesSaranda from "./TravelSlidesSaranda";
import TravelSlidesLisbon from "./TravelSlidesLisbon";
import TravelSlidesSpain from "./TravelSlidesSpain";



export const travelData= [
  {
    id: 1,
    country: "Spain",
    city: "Palma de Mallorca",
    description:       
 ["Palma de Mallorca is the vibrant capital of Spain's Balearic Islands, known for its stunning beaches, historic architecture, and lively Mediterranean atmosphere.",
  "The city's iconic La Seu Cathedral, a masterpiece of Gothic architecture, overlooks the bay and features design elements by Antoni Gaudí.",
  "Palma is famous for its delicious cuisine, including local specialties like ensaimada (a sweet pastry) and sobrasada (a cured sausage). 🌴🏝️",
],
  
dish:
    [ "I absolutely love paella—it's the perfect blend of savory rice, fresh seafood, and vibrant spices.",
    "Every bite instantly transports me back to sunny afternoons by the Mediterranean Sea! 🥘✨"
    ], 

    recipeLink: "/Recipes",
    CountryImage:<TravelSlidesSpain/>
  
  },
  {
    id: 2,
    country: "Italy",
    city: "Cinque Terre",
    description: [
    "I visited Cinque Terre and immediately fell in love with its charming seaside villages perched along Italy's rugged coastline.",
    "The colorful houses nestled against dramatic cliffs create breathtaking views unlike anywhere else in the world.",
    "Wandering through narrow streets filled with vibrant cafés, tiny shops, and the scent of fresh seafood was unforgettable.",
    "Hiking along scenic trails connecting the five villages provided endless moments of awe and tranquility.",
    "Cinque Terre truly captured my heart and left me dreaming of my next visit! 🌊🇮🇹✨"
      
    ],
    
    dish: [
    "Anchovies at Limone is a delicious local specialty from Cinque Terre.",
    "Featuring fresh anchovies marinated in tangy lemon juice and aromatic olive oil.",
    "This simple yet flavorful dish perfectly captures the essence of Mediterranean cuisine.🍋🐟✨"
    ],
    
    recipeLink: "/Recipes",
    CountryImage:<TravelSlidesItaly/>
  
  },
  {
    id: 3,
    country: "Greece",
    city: "Athens",
    description:[
"Athens is an incredible city to visit, blending ancient history with vibrant modern culture.", 
"Exploring iconic landmarks like the Acropolis and Parthenon feels like stepping back in time.",
"The charming streets of Plaka are filled with cozy cafés, unique shops, and welcoming locals.",
"With delicious Greek cuisine and breathtaking views at every turn, Athens truly offers an unforgettable travel experience. 🇬🇷🏛️✨"
],
    
dish:[
"A classic dish from Athens is Moussaka, a hearty and flavorful layered casserole made from eggplant.",
"Rich, aromatic, and perfectly baked until golden-brown, Moussaka beautifully captures the essence of Greek home cooking. 🍆🇬🇷✨"
],

recipeLink: "/Recipes",
CountryImage: <TravelSlidesGreece/>
  },
  {
    id: 4,
    country: "Albania",
    city: "Saranda",
description:[
"I absolutely love visiting Saranda, with its beautiful turquoise waters, sunny beaches, and relaxed atmosphere.", 
"Strolling along the lively promenade and tasting fresh seafood at cozy seaside cafés is always unforgettable.",
"Every visit to Saranda fills me with warmth and happiness, making me eager to return again! 🌊☀️"
  ],

dish:[
"A classic dish from Saranda is Smashed Potato Casserole, a comforting baked specialty made of tender potato and herbs.",
"This traditional Albanian dish perfectly represents the coastal flavors and hospitality of Saranda. 🍲🇦🇱✨"
  
],

  recipeLink: "/Recipes",
  CountryImage: <TravelSlidesSaranda/>
  },
  {
    id: 5,
    country: "Portugal",
    city: "Lisbon",
    description: [
    "Lisbon stole my heart with its colorful.",
    "I fell in love with wandering through Alfama's winding alleys, tasting freshly baked Pastéis de streets, cozy cafes, and breathtaking ocean views.",
    ],
    dish: [
    "A classic dish from Lisbon is Codfish (Bacalhau à Brás), a delicious comfort food made with salted codfish.🌞✨",
    "This hearty meal perfectly reflects Portugal’s love for seafood, rich flavors, and local tradition in every bite!🐟✨"
      
      
    ],
    recipeLink: "/Recipes",
    CountryImage:<TravelSlidesLisbon/>
  }
];

export default travelData;