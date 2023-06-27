import React from "react";
import { useLocation } from "react-router-dom";

export interface NavbarItemsProps {
  items: Array<NavbarItemProps>;
}

export const NavbarItems = (props: NavbarItemsProps) => {
  const { items } = props;

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
      {items.map((item) => (
        <NavbarItem key={item.text} {...item} />
      ))}
    </div>
  );
};

interface NavbarItemProps {
  text: string;
  href: string;
}

const NavbarItem = (props: NavbarItemProps) => {
  const { text, href } = props;
  const location = useLocation();

  return (
    <a
      href={href}
      className={`text-[16px] md:text-[18px] font-semibold hover:text-brand-sandy-brown ${
        location.pathname === href && "text-brand-sandy-brown"
      }`}
    >
      {text}
    </a>
  );
};
