import React, { useContext } from "react";
import { NavbarItems, NavbarItemsProps } from "./NavbarItems";
import { ButtonLink } from "components/ButtonLink";
import { Button } from "components/Button";
import { serverBaseUrl } from "config/server";
import { AuthContext } from "states/AuthContextProvider";
import { useNavigate } from "react-router";

export interface NavbarDrawerProps {
  items: NavbarItemsProps["items"];
}

export const NavbarDrawer = (props: NavbarDrawerProps) => {
  const { items } = props;
  const authState = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authState.setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="absolute right-0 top-[26px] bg-brand-gunmetal border border-brand-sandy-brown shadow-lg rounded px-[18px] py-[12px]">
      <NavbarItems items={items} />
      {/* Login/Logout Button */}
      <div className="mt-2">
        {/* <ButtonLink href="login">Login</ButtonLink> */}
        {/* Login/Logout Button */}
        {authState.isLoggedIn ? (
          <a href={serverBaseUrl + "auth/logout"} onClick={handleLogout}>
            <Button className="cursor-pointer">Logout</Button>
          </a>
        ) : (
          <ButtonLink href="login">Login</ButtonLink>
        )}
      </div>
    </div>
  );
};
