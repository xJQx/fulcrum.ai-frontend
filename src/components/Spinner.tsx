import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

export const Spinner = (props: SpinnerProps) => {
  const { size = "md" } = props;

  let sizeClassName = "";
  switch (size) {
    case "sm":
      sizeClassName += "w-8 h-8";
      break;
    case "md":
      sizeClassName += "w-12 h-12";
      break;
    case "lg":
      sizeClassName += "w-16 h-16";
      break;
  }

  return (
    <div
      className={
        "border-t-2 border-l-2 border-brand-sandy-brown rounded-full animate-spin" +
        ` ${sizeClassName}`
      }
    ></div>
  );
};
