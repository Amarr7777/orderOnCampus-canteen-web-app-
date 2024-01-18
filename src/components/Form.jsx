import React from "react";

function Form() {
  return (
    <div className=" flex items-center bg-white shadow-2xl rounded-lg p-5 m-20 justify-between ">
      <p className="text-black">Name: </p>
      <input type="text" placeholder="Amar" className="border p-2" />
    </div>
  );
}

export default Form;
