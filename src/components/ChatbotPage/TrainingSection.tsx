import React from "react";
import Spinner from "components/ChatbotPage/TrainingSectionSpinner";

/* chatbot training modal */

type TrainingSectionProps = {
  isLoading: boolean;
};

export const TrainingSection = ({ isLoading }: TrainingSectionProps) => {
  return (
    <div className="bg-white w-[340px] h-[210px] md:w-[650px] md:h-[376px] rounded-lg shadow-lg block mx-auto mb-[50px] relative">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center h-[120px] md:h-[276px]">
        <div className="mt-8 mb-5 md:mt-5 md:mb-12">
          {isLoading && <Spinner />}
        </div>
        <div className="space-y-2 text-center">
          <p className="text-sm md:text-lg text-black">
            Model is being trained on the dataset...
          </p>
          <p className="text-xs md:text-base text-black">Please stand by</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-brand-gunmetal w-full h-[60px] md:h-[100px] mx-auto rounded-bl-lg rounded-br-lg absolute bottom-0"></div>
    </div>
  );
};
