import React from "react";
import { Button } from "./Button";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const { href, children, className } = props;

  return (
    <a href={href}>
      <Button className={className}>{children}</Button>
    </a>
  );
};
