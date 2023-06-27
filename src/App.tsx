import { ChatbotPage } from "pages/ChatbotPage";
import { DashboardPage } from "pages/DashboardPage";
import { DocsPage } from "pages/DocsPage";
import { HomePage } from "pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen font-work-sans">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
