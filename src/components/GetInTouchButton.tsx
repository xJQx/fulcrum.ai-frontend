import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const GetInTouchButton = (props: ButtonProps) => {
  const { children, className } = props;

  return (
    <div
      style={{
        color: "#FAAE2B",
        borderRadius: "8px",
        transition: "all .3s cubic-bezier(0,0,.5,1)",
        float: "right",
      }}
      className={
        "px-[15px] md:px-[22px] py-[2px] md:py-[4px] bg-white font-semibold float-right GetInTouch" +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};
