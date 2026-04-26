import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon-star.svg";

const Rating = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col justify-center gap-6 bg-grey-900 w-sm p-6 rounded-lg text-white">
      <img className="w-4" src={icon} alt="Star Icon" />

      <p className="text-2xl font-bold">How did we do?</p>

      <p className="text-grey-500">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="flex gap-5">
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num}>
            <input
              type="radio"
              name="rating"
              value={num}
              className="hidden peer"
              onChange={() => setSelected(num)}
            />

            <span
              className="
                font-bold
                w-12 h-12 
                flex items-center justify-center
                rounded-full
                bg-gray-700 text-white
                cursor-pointer
                transition
                peer-checked:bg-orange-500
                peer-checked:text-black
              "
            >
              {num}
            </span>
          </label>
        ))}
      </div>
      <button
        className="bg-orange-500 w-full font-bold py-2 rounded-3xl text-grey-950"
        onClick={() => navigate("/review", { state: { selected } })}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Rating;
