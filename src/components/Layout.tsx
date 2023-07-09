import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
