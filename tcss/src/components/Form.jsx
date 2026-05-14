import React, { useState } from "react";
import Btn from "./Btn";

const Form = () => {
  const [FUserName, setFUserName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(FUserName);

    setFUserName("");
  };
  return (
    <div className=" p-10 bg-fuchsia-500">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={FUserName}
          onChange={(e) => {
            setFUserName(e.target.value);
          }}
          placeholder="Enter your Name"
          className="py-4 px-3 m-5 text-xl rounded outline-4 border-5 border-fuchsia-100 "
        />
        <Btn/>
         
      </form>
    </div>
  );
};

export default Form;
