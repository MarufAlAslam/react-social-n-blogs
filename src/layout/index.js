import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    // retrive user from local storage
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigator = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("isLoggedIn");
        if(user){
            setIsLoggedIn(true);
        }else{
            navigator("/");
        }
    }, [isLoggedIn, navigator]);

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigator("/");
        
    }
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-start">
      <div className="md:w-2/12">
        <div className="md:min-h-screen flex flex-col justify-end items-start md:p-10 p-4">
            <NavLink to="/dashboard" className="w-full mb-3 jost italic">Home</NavLink>
            <NavLink to="/get-involved" className="w-full mb-3 jost italic">Get Involved </NavLink>
            <NavLink to="/info-and-support" className="w-full mb-3 jost italic">Information and support</NavLink>
            <NavLink to="/about" className="w-full mb-3 jost italic">About</NavLink>
            {
                isLoggedIn && <span className="w-full mb-3 jost italic cursor-pointer" onClick={logout}>Log Out</span>
            }
        </div>
      </div>
      <div className="md:w-10/12">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
