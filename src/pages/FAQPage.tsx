import React, { useState } from "react";
import FAQ from "../components/FAQ";
import {
  QuestionMarkCircleIcon,
  PencilSquareIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { LiaRobotSolid } from "react-icons/lia";
import GetInTouch from "../components/GetInTouch";
import { IoSearchSharp } from "react-icons/io5";

const FaQ: Array<{ icon: JSX.Element; question: string; answer: string }> = [
  {
    icon: <LiaRobotSolid className="h-6 w-6" />,
    question: "What is Fulcrum.ai?",
    answer:
      "Fulcrum.ai is a SaaS service that streamlines the process of chatbot creation. With Fulcrum.ai, you can create custom chatbots trained to answer any query on the knowledge base you provide.",
  },
  {
    icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
    question: "How does Fulcrum.ai work?",
    answer:
      "After uploading the document you wish, Fulcrum.ai will help you to create and train a reliable, custom made chatbot in a process that takes at most a few minutes. Try it out now by heading to the Chatbot tab.",
  },
  {
    icon: <PencilSquareIcon className="h-6 w-6" />,
    question: "Can I customize the chatbot?",
    answer:
      "Absolutely! You can fully customize the chatbot by tuning its parameters such as personality, as well as provide more training data to train the chatbot perfectly to your preference.",
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    question: "How much does this service cost?",
    answer: "Our pricing structure is free for all users. ",
  },
  {
    icon: <CursorArrowRaysIcon className="h-6 w-6" />,
    question: "How can I get started with Fulcrum.ai?",
    answer:
      "You can try Fulcrum.ai for free by signing up on our website. All you need to do is provide your information, upload the PDF file for your knowledge base, and we'll custom make a chatbot just for you.",
  },
  {
    icon: <CodeBracketIcon className="h-6 w-6" />,
    question: "Do I need any technical skills to use Fulcrum.ai?",
    answer:
      "No technical skill or coding is required. All that is needed from your end is uploading the document for the chatbot to be trained on. However, should you run into any issues in the process, we're here to help with email support for all our users.",
  },
];

export const FAQPage = () => {
  //search bar
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQ = FaQ.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // fn to update the search term everytime
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-gunmetal pt-[30px] pb-[30px] md:pt-[10px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above ">
          Ask Us Anything
          <div className=" text-brand-sunglow font-source-sans-pro font-semibold w-[425px] text-[18px] pt-[15px] pb-[10px] text-center md:text-center below ">
            Have any questions? We&apos;re here to assist you.
            <div className="bg-white rounded-md h-[35px] w-[250px] text-[16px] md:h-[40px] md:w-[270px] md:text-[18px] mx-auto flex align-center justify-center px-2 input-wrapper mt-[25px]">
              <IoSearchSharp className=" text-gray-500 top-1/2 my-auto " />
              <input
                type="search"
                name="search"
                placeholder="Search keywords here"
                value={searchTerm}
                onChange={handleSearch}
                className=" rounded-md border-none focus:outline-none h-full w-full pl-[8px]
                  text-black font-regular top-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="FAQsection p-4 px-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:grid-rows-3 md:gap-[20px] xl:grid-cols-3 xl:grid-rows-2 xl:gap-[20px] bg-[#f2f2f2]">
        {filteredFAQ.map((faq) => (
          <FAQ
            key={faq.question}
            icon={faq.icon}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>

      <section className="FAQsection p-4 px-8 pb-8 bg-[#f2f2f2] flex-grow">
        <GetInTouch />
      </section>
    </div>
  );
};
