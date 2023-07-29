export interface ChatbotDisplaySchema {
  chatbotId: string;
  name: string;
  trainedData: string;
  parameters: {
    personality: string;
    language: string;
  };
  usage: {
    currentApiRequests: number;
    maxApiRequests: number;
    timeUsed: number;
    totalTime: number;
  };
  createdAt: string;
  updatedAt: string;
  // TODO: Combine with Chatbot Schema
  // chatbot_id: string;
  // chromadb_index: string;
  // gcs_bucket: string;
  // deployedURL: string;
}

export interface ChatbotSchema {
  chatbot_id: string;
  chromadb_index: string;
  gcs_bucket: string;
  deployedURL: string;
}
