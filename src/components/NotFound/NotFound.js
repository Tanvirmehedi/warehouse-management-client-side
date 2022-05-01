import React from "react";
import { Link } from "react-router-dom";
import "../NotFound/NotFound.css";

const NotFound = () => {
  return (
    <div className="page_404">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="four_zero_four_bg">
            <h1 className="text-center text-red-700 shadow-inner ">404</h1>
          </div>

          <div className="content_box_404">
            <h3 className="text-2xl">Look like you're lost</h3>

            <p className="text-md uppercase">
              the page you are looking for not available!
            </p>

            <Link
              to="/"
              className="link_404 rounded-lg drop-shadow font-semibold"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
