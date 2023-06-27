import React from "react";

interface NavbarContainerProps {
  children: React.ReactNode;
}

export const NavbarContainer = (props: NavbarContainerProps) => {
  const { children } = props;

  return (
    <div className="flex flex-row justify-between items-center w-screen bg-brand-gunmetal py-[12px] md:py-[22px] px-[22px] md:px-[42px] text-white">
      {children}
    </div>
  );
};
