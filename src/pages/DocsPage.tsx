import React, { useRef } from "react";

export const DocsPage = () => {
  const aboutThisAppRef = useRef<HTMLDivElement>(null);
  const gettingStartedRef = useRef<HTMLDivElement>(null);
  const basicFeaturesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="heading mt-[30px]">
        <div
          style={{
            maxWidth: "63rem",
            display: "block",
          }}
          className="font-work-sans text-[28px] ml-[30px] px-10 md:text-[40px] md:p-[10px] "
        >
          Read the docs
        </div>
      </div>
      <div className="flex">
        <div className="sidepanel hidden md:block mt-[40px] font-source-sans-pro text-[20px] mb-[20px] md:p-[10px] md:ml-[50px]">
          <div
            className="font-bold mb-4 link cursor-pointer hover:text-hyperlink-blue
            hover:underline"
            onClick={() => scrollToSection(aboutThisAppRef)}
          >
            About this App
          </div>
          <div className="mb-4">Supported Versions</div>
          <div className="mb-4">Technology</div>

          <div className="divider w-40 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "></div>

          <div
            className="font-bold mb-4 link cursor-pointer hover:text-hyperlink-blue
            hover:underline"
            onClick={() => scrollToSection(gettingStartedRef)}
          >
            Getting Started
          </div>
          <div className="mb-4">Installing the App</div>
          <div className="mb-4">Opening the App</div>

          <div className="divider w-40 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "></div>

          <div
            className="font-bold mb-4 cursor-pointer hover:text-hyperlink-blue
            hover:underline"
            onClick={() => scrollToSection(basicFeaturesRef)}
          >
            Basic Features
          </div>
          <div className="mb-4">Create Chatbot</div>
          <div className="mb-4">Delete Chatbot</div>

          <div className="mb-4">Update Chatbot</div>
          <div className="mb-4">Access all Chatbots</div>
          <div className="mb-4">Access Profile</div>

          <div className="divider w-40 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "></div>
        </div>

        <div className="right-col justify-center mt-[40px] text-left w-full ml-[30px] px-10 md:ml-[150px] md:mr-[50px] mb-[20px]">
          <h1
            className="font-work-sans font-bold text-[30px] md:text-[35px] mb-[20px] underline"
            ref={aboutThisAppRef}
          >
            About this App
          </h1>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            Fulcrum.ai seeks to streamline the process of chatbot creation.
            Build custom chatbots with any knowledge base by simply dropping in
            one or multiple links to any document, and training the chatbot how
            you like. This AI-powered chatbot is here to offer you immediate
            answers to any question you might have.{" "}
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Supported Versions:
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            All browser versions should be supported. However, testing was
            mainly done on Chrome.
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Technology
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            This app is built with Typescript, HTML and CSS.{" "}
          </p>

          <div
            className="divider w-100 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "
            ref={gettingStartedRef}
          ></div>

          <h2 className="font-work-sans font-bold text-[30px] md:text-[35px] mb-[10px] underline">
            Getting Started
          </h2>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Using the App
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            <ol >
              <li>1. To create a chatbot, simply head over to the Chatbot tab and upload a pdf file. This will serve as the knowledge base your chatbot is trained on.</li>
              <li>2. Upon clicking upload, a page preview will be shown.</li>
              <li>3. Confirm this is the file to be uploaded. If you wish to choose another file, simply click the delete button and browse or drag and drop.</li>
              <li>4. Upon clicking confirm, you will be directed to a chat page where you can start chatting with the chatbot created just for you.</li>
            </ol>
          </p>

          <div
            className="divider w-100 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "
            ref={basicFeaturesRef}
          ></div>

          <h2 className="font-work-sans font-bold text-[30px] md:text-[35px] mb-[10px] underline">
            Basic Features
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            Fulcrum.ai offers features such as creating chatbots, deleting
            chatbots and updating chatbots. The user is also able to access all
            chatbots through the dashboard tab or access their profile.
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Create Chatbot
          </h2>
          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            Creating your own custom chatbot is really easy and can be done in
            just three steps. All you need to do is click the create chatbot
            tab, choose the document data type and upload your file.
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Delete Chatbot
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            If there are any chatbots you are not satisfied with, simply choose
            the chatbot you wish to delete from the Dashboard tab and click
            Delete. Do note that once a chatbot has been deleted, it cannot be
            retrieved.
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Update Chatbot
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            Re-train your chatbots or update their personality by clicking on
            Edit on the chatbot card in Dashboard tab. This will bring you to
            Edit Chatbot page, with the option to re-upload another document or
            further tune the chatbot’s parameters such as personality and
            language.{" "}
          </p>

          <h2 className="font-work-sans font-bold text-[25px] md:text-[30px] mb-[20px]">
            Access all Chatbots
          </h2>

          <p className="text-[18px] md:text-[20px] font-work-sans mb-[20px] pr-[10px]">
            The Dashboard page offers a powerful yet user-friendly interface for
            you to access, control, and analyze all your chatbots in one
            centralized location. Each chatbot is represented by a card,
            providing essential information such as the data it was trained on,
            tuned parameters and usage statistics. Interactive controls, such as
            buttons or links, are provided to edit, run or delete a chatbot.
            Clicking on a chatbot expands it to reveal additional details and
            statistics, such as recent user interactions specific to that
            chatbot.{" "}
          </p>

          <div className="divider w-100 h-1 bg-brand-sunglow rounded-[30px] my-[20px] "></div>
        </div>
      </div>
    </>
  );
};
