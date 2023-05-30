import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

const Details = () => {
  const location = useLocation();
  const item = location.state.item;
  console.log(item);
  return (
    <div className="p-10 md:w-2/3 mx-auto">
      {/* back to dashboard */}
      <Link to="/dashboard" className="text-sm mb-10 flex items-center">
      <FiArrowLeft className="mr-3"/>  Back to Dashboard
      </Link>
      <h2 className="text-lg p-5 bg-[#A18080] rounded-[15px] mb-14 inline-block">
        {item.title}
      </h2>
      <p className="text-lg mb-10">{item.description}</p>

      <div className="text-right">
        {/* join the discussion */}
        <Link to="/" className=" p-5 bg-[#A18080] rounded-[15px]">
          Join Group
        </Link>
      </div>
    </div>
  );
};

export default Details;
