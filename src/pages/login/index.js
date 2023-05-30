import React from "react";
import LoginSidebar from "../../components/login-sidebar";

import logo from "../../assets/imgs/logo.png";

const Login = () => {
  return (
    <div className="">
      <div className="flex justify-between items-start">
        <div className="md:w-9/12">
          <div className="text-center p-10 h-screen flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="mx-auto mb-16" />

            <p>
              <span className="text-2xl font-bold">Welcome to</span> <br />
              <span className="text-4xl font-bold uppercase mt-2 block">
                Stress & Anxiety Blog App
              </span>{" "}
              <br />
            </p>

            <p className="text-lg font-[300] mt-24">
              Welcome to our Blog app that can be a valuable tool in your mental <br/>
              health journey, and we're committed to providing you with the <br/>
              support and resources you need to thrive.
            </p>
          </div>
        </div>
        <div className="md:w-3/12 min-h-screen">
          <LoginSidebar />
        </div>
      </div>
    </div>
  );
};

export default Login;
