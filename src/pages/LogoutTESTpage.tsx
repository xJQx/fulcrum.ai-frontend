import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router for routing

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/logout", {
        method: 'GET',
        credentials: 'include', // Include credentials to ensure the session is recognized
      });

      if (response.ok) {
        // Logout successful, redirect to home or login page
        navigate('/'); // Replace with the appropriate route for your home or login page
      } else {
        console.error("Logout failed");
        // Handle error, e.g., show a message to the user
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle network error, e.g., show a message to the user
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutPage;
