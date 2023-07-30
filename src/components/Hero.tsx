import React from "react";
import { ButtonLink } from "./ButtonLink";
import { TextLinearGradient, UnderlineCustomBrandCurve } from "./Typography";
import { FaRobot } from "react-icons/fa6";
import { clientBaseUrl } from "config/client";

export const Hero = () => {
  return (
    <div className="bg-brand-gunmetal min-h-screen -mt-[60px] pt-[60px] md:-mt-[92px] md:pt-[92px] px-[48px] text-white flex flex-row justify-center items-center gap-6">
      {/* Left Column */}
      <div className="max-w-[750px] flex flex-col gap-[28px] items-center lg:items-start">
        <div className="relative font-bold text-[48px] md:text-[54px] leading-tight text-center lg:text-start">
          <span className="relative">
            Create
            {/* Robot Icon */}
            <FaRobot className="w-[36px] h-[36px] absolute -top-6 -left-5 -rotate-[20deg] text-brand-sandy-brown" />
          </span>
          &nbsp;
          <TextLinearGradient brand>Customized</TextLinearGradient>
          &nbsp;<TextLinearGradient brand>ChatBots</TextLinearGradient>
          &nbsp;With Your&nbsp;
          <span className="relative">
            Data
            {/* Custom Underline */}
            <UnderlineCustomBrandCurve className="absolute -bottom-8 -right-4 w-24 md:-bottom-9 md:-right-4 md:w-32" />
          </span>
        </div>
        <div className="font-source-sans-pro max-w-[425px] text-center lg:text-start">
          Just upload your documents and create a customized chatbot using your
          data, just for your <span className="underline">needs</span>.
        </div>
        <div className="w-max">
          <ButtonLink href={`${clientBaseUrl}login`}>Try Now</ButtonLink>
        </div>
      </div>

      {/* Phone Preview */}
      <div className="hidden lg:block min-w-[350px]">
        <img
          src="/fulcrum.ai-frontend/assets/phone_preview.jpeg"
          alt="phone preview"
          height="500"
          width="400"
        />
      </div>
    </div>
  );
};
