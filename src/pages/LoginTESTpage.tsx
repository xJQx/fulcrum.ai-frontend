import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for routing

const LoginTESTpage = () => {
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  //login
  const handleGoogleLogin = () => {
    fetch("http://127.0.0.1:8000/auth/login/google")
      .then((response) => {
        if (response.ok) {
          // need to return it to check if registered
          return response.json();
        } else {
          console.error("Error initiating Google login");
        }
      })
      .then((data) => {
        if (data && data.registered == false) {
          setRegistered(false);
        } else {
          setRegistered(true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  //logout
  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/logout", {
        method: "GET",
        credentials: "include", // Include credentials to ensure the session is recognized
      });

      if (response.ok) {
        // Logout successful, redirect to home or login page
        navigate("/"); // Replace with the appropriate route for your home or login page
      } else {
        console.error("Logout failed");
        // Handle error, e.g., show a message to the user
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle network error, e.g., show a message to the user
    }
  };

  //handle form submission which i need to consume the register endpoint
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    //event.target is the form
    const formData = new FormData(event.target);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    // Create a new FormData object without the file input
    const formDataWithoutFile = new FormData();
    formDataWithoutFile.append("email", email);
    formDataWithoutFile.append("name", name);

    // post req to the register endpoint
    fetch("http://127.0.0.1:8000/api/users/register", {
      method: "POST",
      body: formDataWithoutFile,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("Error registering user");
        }
      })
      .then((data) => {
        // if ur not registered, it directs u to the form
        setRegistered(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <>
      {registered ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // if not registered u need to login and the form
        <form onSubmit={handleFormSubmit}>
          {/* one div for email one div for name */}
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      )}
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </>
  );
};

export default LoginTESTpage;
