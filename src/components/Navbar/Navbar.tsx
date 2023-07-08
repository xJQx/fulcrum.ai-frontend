import React, { useContext, useState } from "react";
import { NavbarContainer } from "./NavbarContainer";
import { TextLinearGradient } from "components/Typography";
import { NavbarItems, NavbarItemsProps } from "./NavbarItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";
import { ButtonLink } from "components/ButtonLink";
import { NavbarDrawer } from "./NavbarDrawer";
import { AuthContext } from "states/AuthContextProvider";
import { Button } from "components/Button";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const navbarItems: NavbarItemsProps["items"] = [
    {
      text: authContext.isLoggedIn ? "Dashboard" : "Demo",
      href: authContext.isLoggedIn ? "/dashboard" : "/demo",
    },
    { text: "API", href: "/api" },
    { text: "FAQ", href: "/faq" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    authContext.setIsLoggedIn(false);
    navigate("/");
  };

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
        {authContext.isLoggedIn ? (
          <div onClick={handleLogout}>
            <Button className="cursor-pointer">Logout</Button>
          </div>
        ) : (
          <ButtonLink href="login">Login</ButtonLink>
        )}
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
