import { ChatbotSchema } from "./chatbot";

export interface UserSchema {
  userid: string;
  email: string;
  name: string;
  email_verified: boolean;
  is_active: boolean;
  is_superuser: boolean;
  no_chatbots: number;
  chatbotConfigs: ChatbotSchema[];
  created_date: string;
  updated_date: string;
}
