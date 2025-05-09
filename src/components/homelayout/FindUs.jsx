import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us On</h1>

      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start hover:bg-gray-200">
            {" "}
            <FaFacebook />
            Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start hover:bg-gray-200">
            {" "}
            <FaTwitter />
            Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start hover:bg-gray-200">
            {" "}
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
