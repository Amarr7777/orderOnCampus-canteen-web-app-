import React from "react";
import "./addCanteen.css";
import Form from "../components/Form";
import GettingStarted from "../components/gettingStarted";
function AddCanteen() {
  return (
    <>
      <div className="main  text-white py-14 px-52 items-center justify-between content-center">
        <h1 className="text-4xl text-white font-bold text-center py-6 mb-20">
          OrderOnCampus
        </h1>
        <div className="flex gap-5">
          <div
            className="bg-blue-600 text-center rounded-lg p-3 cursor-pointer px-10"
            style={{ width: "50%" }}
          >
            <button>Register your Canteen</button>
          </div>
          <div
            className="bg-white text-center rounded-lg p-3 cursor-pointer px-10"
            style={{ width: "50%" }}
          >
            <button className="text-black">
              Login to your existing canteen
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center content-center">
        <GettingStarted />
      </div>
    </>
  );
}

export default AddCanteen;
