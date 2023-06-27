import React, { useState } from "react";
import { NavbarContainer } from "./NavbarContainer";
import { TextLinearGradient } from "components/Typography";
import { NavbarItems, NavbarItemsProps } from "./NavbarItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { ButtonLink } from "components/ButtonLink";
import { NavbarDrawer } from "./NavbarDrawer";

export const Navbar = () => {
  const navbarItems: NavbarItemsProps["items"] = [
    { text: "Demo", href: "/demo" },
    { text: "API", href: "/api" },
    { text: "FAQ", href: "/faq" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <NavbarContainer>
      {/* Brand Name + Navbar Items */}
      <div className="flex flex-row justify-between items-center gap-20">
        {/* Brand Name */}
        <a href="/">
          <TextLinearGradient
            brand
            className="text-[24px] md:text-[32px] font-bold"
          >
            Fulcrum.ai
          </TextLinearGradient>
        </a>

        {/* Navbar Items */}
        <div className="hidden md:block">
          <NavbarItems items={navbarItems} />
        </div>
      </div>

      {/* Login/Logout Button */}
      <div className="hidden md:block">
        <ButtonLink href="login">Login</ButtonLink>
      </div>

      {/* Navbar Drawer */}
      <div className="relative block md:hidden">
        {/* Button */}
        <div
          className="text-brand-sandy-brown cursor-pointer"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
            <FaX className="text-[18px]" />
          ) : (
            <GiHamburgerMenu className="text-[22px]" />
          )}
        </div>
        {/* Drawer */}
        {isDrawerOpen && <NavbarDrawer items={navbarItems} />}
      </div>
    </NavbarContainer>
  );
};
