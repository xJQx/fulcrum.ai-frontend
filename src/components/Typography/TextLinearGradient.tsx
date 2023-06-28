import React from "react";

interface TextLinearGradientProps {
  children: React.ReactNode;
  brand: boolean;
  to?: string;
  from?: string;
  className?: string;
}

// Text with Linear Gradient Color (from left to r)
export const TextLinearGradient = (props: TextLinearGradientProps) => {
  const { children, brand, to, from, className } = props;

  let textLinearGradientClassName =
    "bg-gradient-to-r bg-clip-text text-transparent";

  if (brand) {
    textLinearGradientClassName += " from-brand-sunglow to-brand-sandy-brown";
  } else {
    textLinearGradientClassName += ` "from-"${from?.replace(
      "from-",
      ""
    )} "to-"${to?.replace("to-", "")}`;
  }

  return (
    <span
      className={`inline-block ${textLinearGradientClassName} ${className}`}
    >
      {children}
    </span>
  );
};
