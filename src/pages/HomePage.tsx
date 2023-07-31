import { Hero } from "components/Hero";
import React, { useContext, useEffect } from "react";
import {
  FaArrowRight,
  FaCircleCheck,
  FaFilePdf,
  FaRobot,
} from "react-icons/fa6";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";

export const HomePage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      {/* Hero Component */}
      <Hero />

      {/* Promotional Sections */}
      <div
        id="promo-section"
        className="px-[25px] md:px-[45px] py-[40px] mb-[24px] flex flex-col gap-24 md:gap-40"
      >
        {/* Section 1 - 3 Simple Steps */}
        <div id="promo-section-1">
          <div className="flex flex-col justify-center items-center">
            <div className="font-semibold text-[20px] md:text-[28px] text-center">
              <span>3 Simple Steps. </span>
              <span className="text-[#797979]">
                To create a customized chatbot.
              </span>
            </div>
            <div className="font-source-sans-pro text-[16px] md:text-[20px] mt-[12px] leading-tight max-w-[550px] text-center">
              Create a new chatbot with one click of a button and train it on a
              document of your choice.
            </div>
          </div>

          {/* 3 Steps Process Diagram */}
          <div className="mt-[56px] flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex gap-2 justify-center items-center bg-brand-sunglow px-[28px] py-[16px] rounded-xl shadow-lg">
              <FaFilePdf className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
              <span className="font-semibold text-[14px] md:text-[16px]">
                Upload Your Data
              </span>
            </div>
            <FaArrowRight className="w-[20px] h-[20px] rotate-90 md:rotate-0" />
            <div className="flex gap-2 justify-center items-center bg-brand-burnt-sienna px-[28px] py-[16px] rounded-xl shadow-lg">
              <FaRobot className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
              <span className="font-semibold text-[14px] md:text-[16px]">
                Customize Your Chatbot
              </span>
            </div>
            <FaArrowRight className="w-[20px] h-[20px] rotate-90 md:rotate-0" />
            <div className="flex gap-2 justify-center items-center bg-brand-persian-green px-[28px] py-[16px] rounded-xl shadow-lg">
              <FaCircleCheck className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
              <span className="font-semibold text-[14px] md:text-[16px]">
                Use It For Your Needs
              </span>
            </div>
          </div>
        </div>

        {/* Section 2 - Personalized Dashboard */}
        <div id="promo-section-2">
          <div className="flex flex-col justify-center items-center">
            <div className="font-semibold text-[20px] md:text-[28px] text-center">
              <span>Personalized Dashboard. </span>
              <span className="text-[#797979]">
                For all your created chatbots.
              </span>
            </div>
            <div className="font-source-sans-pro text-[16px] md:text-[20px] mt-[12px] leading-tight max-w-[550px] text-center">
              View all the chatbots you have created, trained on your document.
              Select the best chatbot for your purposes.
            </div>
          </div>
          <div className="mt-[56px] flex justify-center items-center">
            <img
              src="/fulcrum.ai-frontend/assets/desktop-dashboard-preview.png"
              alt="desktop-dashboard-preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
