import React from "react";
import { Button } from "./Button";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "ghost";
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { href, children, variant, className } = props;

  return (
    <a href={href}>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </a>
  );
};
