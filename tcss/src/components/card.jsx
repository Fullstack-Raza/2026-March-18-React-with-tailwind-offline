import React from "react";

const Card = (c) => {
  return (
    <div className=" m-2 rounded border  border-yellow-300 px-5 py-3  bg-blue-800 h-40 w-40">
      <h1 className=" text-white font-semibold text-2xl">
        {c.user} {c.age}
      </h1>
    </div>
  );
};

export default Card;
