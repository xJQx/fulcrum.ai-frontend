import React from "react";

/* chatbot training modal */

const ChatbotTraining = () => {
  return (
    <div className="bg-white border border-gray-200 w-[650px] h-[376px] rounded-lg shadow-lg block mx-auto mb-[50px] ">
      {/* <!-- Top Section --> */}
      <div className="flex flex-col items-center justify-between p-[32px]">
        <div className="mb-4">
          <img
            src="assets/chatbot_logo.png"
            alt="chatbot"
            height="125"
            width="125"
          />
        </div>
        <div className="space-y-2 text-center ">
          <p className="text-lg text-black">
            Model is being trained on the dataset...
          </p>
          <p className="text-base text-black">Please stand by</p>
        </div>
      </div>

      {/* <!-- Bottom Section --> */}
      {/* <div className="bg-brand-gunmetal h-[100px] mt-6 mx-auto rounded flex flex-grow"></div> */}
      <div className="bg-brand-gunmetal h-[100px] mx-auto rounded-bl-lg rounded-br-lg flex justify-center items-center">
        <div className="w-[500px] bg-gray-200 rounded-full h-2.5 ">
          <div className="bg-brand-persian-green h-2.5 rounded-full w-[45%]"></div>
        </div>
      </div>
    </div>

    
  );
};

export default ChatbotTraining;
