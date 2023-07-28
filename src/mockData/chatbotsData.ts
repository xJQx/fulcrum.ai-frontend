import { ChatbotSchema } from "schemas/chatbot";

export const chatbotsData: Array<ChatbotSchema> = [
  {
    chatbotId: "1",
    name: "StudyGPT",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "English",
    },
    usage: {
      currentApiRequests: 5,
      maxApiRequests: 365,
      timeUsed: 30,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
  {
    chatbotId: "2",
    name: "StudyGPT v2",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Chinese",
    },
    usage: {
      currentApiRequests: 53,
      maxApiRequests: 365,
      timeUsed: 1537,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
  {
    chatbotId: "3",
    name: "StudyGPT v3",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Japanese",
    },
    usage: {
      currentApiRequests: 158,
      maxApiRequests: 365,
      timeUsed: 5555,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
  {
    chatbotId: "4",
    name: "StudyGPT v4",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Expert",
      language: "English",
    },
    usage: {
      currentApiRequests: 200,
      maxApiRequests: 365,
      timeUsed: 8888,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
  {
    chatbotId: "5",
    name: "StudyGPT v5",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Methodological",
      language: "Japanese",
    },
    usage: {
      currentApiRequests: 158,
      maxApiRequests: 365,
      timeUsed: 5555,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
  {
    chatbotId: "6",
    name: "StudyGPT v6",
    trainedData: "study-note.pdf",
    parameters: {
      personality: "Expert",
      language: "English",
    },
    usage: {
      currentApiRequests: 200,
      maxApiRequests: 365,
      timeUsed: 8888,
      totalTime: 9999,
    },
    createdAt: "24 June 2023, 8.55am",
    updatedAt: "24 June 2023, 8.55am",
  },
];
