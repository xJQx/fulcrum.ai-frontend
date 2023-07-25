export interface ChatbotSchema {
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
  deletedAt?: string;
}
