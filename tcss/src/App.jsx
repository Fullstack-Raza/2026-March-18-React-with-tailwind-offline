import React from "react";
import Card from "./components/card";
import Btn from "./components/btn";

const App = () => {
  const user = ["Raza","Ali","Hassan","Hussain"]
  return (
    <div className=" p-3 h-screen ">
      {user.map(function(e){
        return <Card user={e}/>
      })}
      <Card user="Raza" age="24" />

      <Card user="Muhsin" age="27" />

      <Btn text="Buy Now" />
    </div>
  );
};

export default App;
