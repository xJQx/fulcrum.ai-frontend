import React, { useState } from "react";

const ChatPage = () => {
  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (event: any) => {
    setIsTyping(event.target.value.trim() !== "" && event.target.value !== "");
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  return (
    <div className="h-screen flex ">
      <div className="bg-[#343541] h-full flex flex-col flex-1 chatbot w-4/6">
        {/* Chat messages section */}
        <div className="w-full user">
          <div className="flex items-center p-[18px] md:p-[24px] m-auto gap-4 w-5/6 md:w-4/6">
            <div className="rounded-full bg-gray-200 h-10 w-10 md:h-12 md:w-12 avatar"></div>
            <div className="text-white chat-message">Hello World</div>
          </div>
        </div>
        <div className="bg-[#444654] w-full chatbot">
          <div className="flex items-center p-[18px] md:p-[24px] m-auto gap-4 w-5/6 md:w-4/6">
            <div className="flex items-center justify-center rounded-full bg-brand-sunglow h-10 w-10 md:h-12 md:w-12 avatar">
              <img
                src="/assets/fulcrum.ai_logo.png"
                alt="Fulcrum.ai Logo"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </div>
            <div className="text-white chat-message">AI</div>
          </div>
        </div>
        {/* Text input field for the question */}
        <div className="flex h-full items-end justify-center chat-input">
          <div className="relative flex flex-col mb-[20px] w-5/6 md:w-4/6">
            <textarea
              style={{ boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.5)" }}
              className="bg-[#40414f] w-full rounded-md placeholder-center text-white text-md p-[12px]"
              placeholder="Ask a Question"
              rows={1}
              onChange={handleTyping}
              onBlur={handleBlur}
            ></textarea>
            <button
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 mt-auto flex items-center justify-center ${
                isTyping ? "h-8 w-8 bg-brand-sunglow rounded-md" : ""
              }`}
            >
              <img
                src="/assets/send_message.svg"
                alt="Send Message"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
