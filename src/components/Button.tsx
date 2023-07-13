import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
}

export const Button = (props: ButtonProps) => {
  const { children, className, onClick, variant = "solid" } = props;

  let variantButtonClassName = "";
  switch (variant) {
    case "solid":
      variantButtonClassName =
        "bg-brand-sunglow hover:bg-brand-sandy-brown text-brand-gunmetal";
      break;
    case "ghost":
      variantButtonClassName =
        "bg-white border border-brand-sunglow text-brand-sunglow hover:bg-brand-sunglow hover:text-brand-gunmetal";
      break;
  }

  return (
    <div
      className={
        "px-[20px] md:px-[22px] py-[2px] md:py-[4px] cursor-pointer font-semibold rounded-3xl" +
        ` ${variantButtonClassName} ${className}`
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};
