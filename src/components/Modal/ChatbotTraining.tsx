import React from "react";
import Spinner from "components/Spinner";

/* chatbot training modal */

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatbotTraining = ({ setIsModalOpen }: Props) => {
  return (
    <div className="bg-white w-[650px] h-[376px] rounded-lg shadow-lg block mx-auto mb-[50px] relative">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center h-[276px]">
        <div className="mt-5 mb-12">
          <Spinner setIsModalOpen={setIsModalOpen} />
        </div>
        <div className="space-y-2 text-center">
          <p className="text-lg text-black">
            Model is being trained on the dataset...
          </p>
          <p className="text-base text-black">Please stand by</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-brand-gunmetal w-full h-[100px] mx-auto rounded-bl-lg rounded-br-lg absolute bottom-0"></div>
    </div>
  );
};

export default ChatbotTraining;
