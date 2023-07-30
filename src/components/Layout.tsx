import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <div className="flex-1">{children}</div>
      {!(
        location.pathname.startsWith("/chat") &&
        !location.pathname.startsWith("/chatbot")
      ) && <Footer />}
    </div>
  );
};
