import { TextLinearGradient } from "components/Typography";
import React from "react";
import { FooterLinks, FooterLinksProps } from "./FooterLinks";

export const Footer = () => {
  const footerLinks: FooterLinksProps["links"] = [
    { text: "API", href: "/api" },
    { text: "FAQ", href: "/faq" },
    {
      text: "Source Code",
      href: "https://github.com/xJQx/fulcrum.ai-frontend",
    },
  ];

  return (
    <div className="relative bg-brand-gunmetal w-full flex flex-col justify-center items-center py-[32px] md:py-[42px] pb-[42px] px-[24px] text-white">
      {/* Brand Name */}
      <a href="/">
        <TextLinearGradient
          brand
          className="text-[16px] md:text-[22px] font-bold"
        >
          Fulcrum.ai
        </TextLinearGradient>
      </a>

      <FooterLinks links={footerLinks} />

      <div className="absolute bottom-3 right-1/5 md:right-4 font-light text-[10px] md:text-[12px]">
        Copyright © 2023 Fulrum AI. All rights reserved.
      </div>
    </div>
  );
};
