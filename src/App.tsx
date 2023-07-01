import { Layout } from "components/Layout";
import { ChatbotPage } from "pages/ChatbotPage";
import { DashboardPage } from "pages/DashboardPage";
import { DocsPage } from "pages/DocsPage";
import { HomePage } from "pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { FAQPage } from "pages/FAQPage";

function App() {
  return (
    <div className="min-h-screen font-work-sans">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
