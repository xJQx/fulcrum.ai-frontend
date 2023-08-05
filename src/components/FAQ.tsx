import React, { ReactNode } from "react";

type Props = {
  icon: JSX.Element;
  question: string;
  answer: string;
};

const FAQ = ({ icon, question, answer }: Props) => {
  const isMobile = window.innerWidth <= 767;

  return (
    <div
      style={{
        borderRadius: "18px",
        boxShadow: "2px 4px 12px rgba(0,0,0,.08)",
        transition: "all .3s cubic-bezier(0,0,.5,1)",
      }}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center min-h-0 h-auto card md:h-[400px] bg-white"
    >
      <div className="mb-4 flex justify-center text-brand-sandy-brown">
        <div
          className="rounded-full border-2 border-gray-100 p-4"
          style={{ backgroundColor: "#FFE6D9" }}
        >
          {icon}
        </div>
      </div>
      <h3
        style={{ fontSize: "18px" }}
        className="font-source-sans-pro font-bold "
      >
        {question}
      </h3>
      <p className="my-3">{answer}</p>
    </div>
  );
};

export default FAQ;
