import React from "react";
import { GetInTouchButton } from "./GetInTouchButton";

interface ButtonLinkProps {
  // href: string;
  children: React.ReactNode;
  className?: string;
}

export const GetInTouchButtonLink = (props: ButtonLinkProps) => {
  const { children, className } = props;

  return (
    // <a href={href}>
    <GetInTouchButton className={className}>{children}</GetInTouchButton>
    // </a>
  );
};
