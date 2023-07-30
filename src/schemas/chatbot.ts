export interface ChatbotSchema {
  chatbot_id: string;
  chromadb_index: string;
  gcs_bucket: string;
  deployedURL: string;
  personality: string;
  dataFileName: string;
  created_date: { $date: string };
  updated_date: { $date: string };
}
