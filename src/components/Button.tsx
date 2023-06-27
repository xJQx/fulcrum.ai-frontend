import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { children, className } = props;

  return (
    <div
      className={
        "px-[20px] md:px-[22px] py-[2px] md:py-[4px] bg-brand-sunglow hover:bg-brand-sandy-brown text-brand-gunmetal font-semibold rounded-3xl" +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};
