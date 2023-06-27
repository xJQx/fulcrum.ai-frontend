import React from "react";
import { useLocation } from "react-router-dom";

export interface FooterLinksProps {
  links: Array<FooterLinkProps>;
}

export const FooterLinks = (props: FooterLinksProps) => {
  const { links } = props;

  return (
    <div className="flex flex-col items-center gap-2 md:gap-2 mt-3">
      {links.map((link) => (
        <FooterLink key={link.text} {...link} />
      ))}
    </div>
  );
};

interface FooterLinkProps {
  text: string;
  href: string;
}

const FooterLink = (props: FooterLinkProps) => {
  const { text, href } = props;
  const location = useLocation();

  return (
    <a
      href={href}
      className={`text-[14px] md:text-[16px] font-semibold hover:text-brand-sandy-brown ${
        location.pathname === href && "text-brand-sandy-brown"
      }`}
    >
      {text}
    </a>
  );
};
