import React, { useState } from 'react'

const Card = () => {

  const [a, seta] = useState(0);
  const abc = () => {
    seta(a + 1);
  };
  return (
     <div className="flex  flex-col justify-center  items-center">
      <h1 className="text-9xl text-cyan-600 font-bold font-serif">{a}</h1>
      <div>
        <button
          className="m-15 p-5 bg-blue-900 text-6xl hover:bg-blue-950 hover:cursor-pointer border-4 border-blue-300 rounded-2xl"
          onClick={abc}
        >
          +1
        </button>

        <button
          className="m-15 p-5 bg-blue-900 text-6xl hover:bg-blue-950 hover:cursor-pointer border-4 border-blue-300 rounded-2xl"
          onClick={() => {
            seta(a - 1);
          }}
        >
          -1
        </button>
      </div>
      
    </div>
  )
}

export default Card
