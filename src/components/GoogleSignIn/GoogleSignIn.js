import React from "react";
import { Link } from "react-router-dom";
import google from "../../img/google.svg";

const GoogleSignIn = () => {
  return (
    <div className="text-center my-10">
      <Link
        className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
        to="/download"
      >
        <span className="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
          <img src={google} alt="" />
        </span>
      </Link>
    </div>
  );
};

export default GoogleSignIn;
