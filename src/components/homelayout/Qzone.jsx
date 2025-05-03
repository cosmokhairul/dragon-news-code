import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-lg">
      <h1 className="font-bold mb-5">QZone</h1>

      <div className="space-y-5 flex flex-col justify-center p-10">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
