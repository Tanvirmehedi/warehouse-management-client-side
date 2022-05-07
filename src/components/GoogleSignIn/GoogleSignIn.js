import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import google from "../../img/google.svg";
const GoogleSignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handelButton = (e) => {
    signInWithGoogle();
  };
  return (
    <div className="text-center my-10">
      <button
        onClick={handelButton}
        className="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
      >
        <span className="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
          <img src={google} alt="" />
        </span>
      </button>
    </div>
  );
};

export default GoogleSignIn;
