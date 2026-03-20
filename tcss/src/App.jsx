import React from "react";
import Card from "./components/card";
import ironman from "./assets/tonystark.jpg"
import PeterParker from "./assets/PeterParker.jpg"

const App = () => {
  const CardInfo = [
  {
    "profilePicture": ironman,
    "fullName": "Tony Stark",
    "bio": "Genius billionaire in a high-tech suit saving the world 🦾",
    "likes": 980000,
    "posts": 320,
    "views": 12000000
  },
  {
    "profilePicture": PeterParker,
    "fullName": "Peter Parker",
    "bio": "Friendly neighborhood hero with spider powers 🕷️",
    "likes": 870000,
    "posts": 410,
    "views": 11000000
  },
  {
    "profilePicture": "https://example.com/captainamerica.jpg",
    "fullName": "Steve Rogers",
    "bio": "Super soldier with unbreakable morals and shield 🛡️",
    "likes": 920000,
    "posts": 210,
    "views": 9500000
  },
  {
    "profilePicture": "https://example.com/thor.jpg",
    "fullName": "Thor Odinson",
    "bio": "God of Thunder wielding Mjolnir ⚡",
    "likes": 890000,
    "posts": 180,
    "views": 9700000
  },
  {
    "profilePicture": "https://example.com/hulk.jpg",
    "fullName": "Bruce Banner",
    "bio": "Scientist with unstoppable green rage 💥",
    "likes": 760000,
    "posts": 95,
    "views": 8800000
  },
  {
    "profilePicture": "https://example.com/blackwidow.jpg",
    "fullName": "Natasha Romanoff",
    "bio": "Elite spy with unmatched combat skills 🕶️",
    "likes": 810000,
    "posts": 150,
    "views": 9000000
  },
  {
    "profilePicture": "https://example.com/hawkeye.jpg",
    "fullName": "Clint Barton",
    "bio": "Master archer who never misses 🎯",
    "likes": 540000,
    "posts": 120,
    "views": 6200000
  },
  {
    "profilePicture": "https://example.com/doctorstrange.jpg",
    "fullName": "Stephen Strange",
    "bio": "Master of mystic arts bending reality 🔮",
    "likes": 830000,
    "posts": 140,
    "views": 9100000
  },
  {
    "profilePicture": "https://example.com/blackpanther.jpg",
    "fullName": "T'Challa",
    "bio": "King of Wakanda with enhanced abilities 🐾",
    "likes": 880000,
    "posts": 170,
    "views": 9400000
  },
  {
    "profilePicture": "https://example.com/scarletwitch.jpg",
    "fullName": "Wanda Maximoff",
    "bio": "Reality-warping witch with immense power 🔥",
    "likes": 950000,
    "posts": 200,
    "views": 10000000
  }
]
  return (
    <div className=" m-3 p-3 h-screen  flex flex-wrap gap-10">
      {CardInfo.map(function(e){
        
        
        return <Card profilePicture={e.profilePicture}  fullName={e.fullName} bio={e.bio} likes={e.likes} posts={e.posts} views={e.views}/>
      })}
      
     
    </div>
  );
};

export default App;
