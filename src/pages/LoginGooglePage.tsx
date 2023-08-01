import { serverBaseUrl } from "config/server";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";
import jwt from "jwt-decode";
import toast from "react-hot-toast";
import { clientBaseUrl } from "config/client";
import { getGoogleAuthResult, loginWithGoogle } from "db/firebase";

export const LoginGooglePage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  // Firebase Google OAuth
  const handleLogIn = async () => {
    console.log("handleLogIn");
    await loginWithGoogle();
  };

  useEffect(() => {
    const getLogInResult = async () => {
      console.log("getLogInResult");
      const response = await getGoogleAuthResult();
      if (!response) {
        return;
      } else {
        console.log(response);
        const { token, user } = response;
        authContext.setAccessToken(token);
        authContext.setUser(user);
        authContext.setIsLoggedIn(true);
        navigate(`${clientBaseUrl}dashboard`);
      }
    };
    if (authContext.isLoggedIn) {
      toast.success("Logged In Successfully. Welcome " + "user");
      navigate(clientBaseUrl);
    } else {
      getLogInResult();
    }
  }, []);

  return (
    <>
      {/* Header */}
      <section className="py-[42px] md:py-[56px] px-[48px] text-white flex flex-row justify-center gap-6">
        <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
          Login
        </div>
      </section>

      {/* Login Methods */}
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[230px]">
          {/*
            Login with google buttons
            Note: Must use <a> for redirect purposes
          */}
          <div onClick={handleLogIn}>
            <div className="flex flex-row justify-center items-center bg-[#4385F5] hover:bg-[#366dca] p-[2px] rounded">
              <img
                src="/fulcrum.ai-frontend/assets/google-logo.png"
                className="w-10 rounded"
              />
              <span className="text-white font-semibold px-3">
                Login with Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
