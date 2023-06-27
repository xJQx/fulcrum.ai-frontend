import React from "react";
import { NavbarItems, NavbarItemsProps } from "./NavbarItems";
import { ButtonLink } from "components/ButtonLink";

export interface NavbarDrawerProps {
  items: NavbarItemsProps["items"];
}

export const NavbarDrawer = (props: NavbarDrawerProps) => {
  const { items } = props;

  return (
    <div className="absolute right-0 top-[26px] bg-brand-gunmetal border border-brand-sandy-brown shadow-lg rounded px-[18px] py-[12px]">
      <NavbarItems items={items} />
      {/* Login/Logout Button */}
      <div className="mt-2">
        <ButtonLink href="login">Login</ButtonLink>
      </div>
    </div>
  );
};
