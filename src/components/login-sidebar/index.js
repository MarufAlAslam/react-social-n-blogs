import React from "react";
import { useState } from "react";
import app from "../../utils/firebase/firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import google from "../../assets/imgs/google.png";
import { useNavigate } from "react-router-dom";

const LoginSidebar = () => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [regiError, setRegiError] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const [currentForm, setCurrentForm] = useState("login");
  const navigator = useNavigate();

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("isLoggedIn", true)
        navigator("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signinWithEmailnPasword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("isLoggedIn", true)
        navigator("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  const signUpWithEmailnPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setConfirm("Account Created Successfully! Please Login");
        setCurrentForm("login");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setRegiError(errorMessage);
      });
  };
  return (
    <div className="flex flex-col justify-between items-start lg:min-h-screen md:p-10 p-4">
      <div className="login-registration w-full">
        {currentForm === "login" ? (
          <form onSubmit={signinWithEmailnPasword}>
            <p className="text-xl mb-2 text-white">Login With Email</p>
            <div className="line w-[100px] h-[2px] bg-white mb-5"></div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="email"
                name="email"
                type="text"
                placeholder="Email Here"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="password"
                name="password"
                type="password"
                placeholder="Password Here"
              />
            </div>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
            {confirm && (<p className="text-sm text-green-300 mb-4">{confirm}</p>)}

            <div className="flex items-center justify-end mb-5">
              <button
                className="bg-white w-full hover:bg-gray-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="mt-4">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setCurrentForm("signup");
                  }}
                  className="text-white cursor-pointer underline"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={signUpWithEmailnPassword}>
            <p className="text-xl mb-2 text-white">Sign Up With Email</p>
            <div className="line w-[100px] h-[2px] bg-white mb-5"></div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="email"
                name="email"
                type="text"
                placeholder="Email Here"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="password"
                name="password"
                type="password"
                placeholder="******************"
              />
            </div>

            {regiError && (
              <p className="text-sm text-red-600 mb-4">{regiError}</p>
            )}
            <div className="flex items-center justify-end mb-5">
              <button
                className="bg-white w-full hover:bg-gray-100 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4">
              <p>
                Already Have an Account?{" "}
                <span
                  onClick={() => {
                    setCurrentForm("login");
                  }}
                  className="text-white cursor-pointer underline"
                >
                  Sign in
                </span>
              </p>
            </div>
          </form>
        )}

        <div className="mt-14">
          <button
            onClick={loginWithGoogle}
            className="bg-white p-3 rounded-lg text-black font-[500] flex w-full justify-center items-center"
          >
            <img src={google} alt="" className="h-6 mr-4" /> Sign in with Google
          </button>
        </div>
      </div>
      <div className="contact-form lg:mt-0 mt-16">
        <p className="text-xl text-white">Contact</p>
        <div className="line w-[100px] h-[2px] bg-white my-5"></div>
        <ul className="mt-4 list-disc list-inside">
          <li className="text-white">
            <a href="tel: +44 / 916" className="text-white text-lg">
              Tel: +44 / 916
            </a>
          </li>
          <li className="text-white">
            <a href="Fax: 031 / 318.99.29" className="text-white text-lg">
              Fax: 031 / 318.99.29
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginSidebar;
