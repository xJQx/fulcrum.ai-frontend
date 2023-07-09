import React, { useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

const Dropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-brand-sandy-brown px-2 py-2 mt-[50px] font-work-sans text-[18px] w-3/6 flex mx-auto items-center"
      >
        Choose Document Type
        {isExpanded ? (
          <BsCaretUpFill className="ml-auto" />
        ) : (
          <BsCaretDownFill className="ml-auto" />
        )}
      </button>
      {isExpanded && (
        <>
          <div
            className="bg-[#FFC940]/[0.29] py-1 font-work-sans text-[18px] w-3/6 flex mx-auto hover:bg-[#ffdf8f] cursor-pointer"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            <div className=" px-2 py-1 ">
              <span>Input Text</span>
            </div>
          </div>
          <div
            className="bg-[#FFC940]/[0.29] py-1 font-work-sans text-[18px] w-3/6 flex mx-auto hover:bg-[#ffdf8f] cursor-pointer"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            <div className=" px-2 py-1 ">
              <span>PDF File</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
