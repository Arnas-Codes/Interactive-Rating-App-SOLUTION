import React from "react";
import icon from "../assets/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";

const Review = () => {
  const location = useLocation();
  const { selected } = location.state || { selected: null };

  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 bg-grey-900 w-sm p-6 rounded-lg text-white">
      <img src={icon} alt="Star Icon" />

      <p className="text-2xl font-bold">
        {selected
          ? `You selected ${selected} out of 5`
          : "You selected 0 out of 5"}
      </p>

      <p className="text-2xl font-bold">Thank you!</p>

      <p className="text-grey-500">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Review;