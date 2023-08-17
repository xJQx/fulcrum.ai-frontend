import { serverBaseUrl } from "config/server";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "states/AuthContextProvider";
import jwt from "jwt-decode";
import toast from "react-hot-toast";
import { clientBaseUrl } from "config/client";
import { getGoogleAuthResult, loginWithGoogle } from "db/firebase";
import useFetch from "hooks/useFetch";
import { JwtUserSchema } from "schemas/jwt";
import { getAuth } from "firebase/auth";

export const LoginGooglePage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const fetch = useFetch();

  const handleLogIn = async () => {
    await loginWithGoogle();
  };

  /**
   * Parse Firebase Google OAuth Login Results.
   * Includes registering users in the backend and setting the authorization headers and global Auth State
   */
  const parseLogInResult = async () => {
    const response = await getGoogleAuthResult();
    if (!response) {
      return;
    } else {
      try {
        const { token, user } = response as {
          token: string;
          user: any;
        };
        console.log("token:", token);
        console.log("user:", user);

        // Register User if User does not exist in the server.
        const { userExists } = await fetch.get(
          `/users/checkExist/userid/${user.uid}` // TODO: this should be firebase user_id
        );
        if (!userExists) {
          const formData = new FormData();
          formData.append("userid", user.uid); // TODO: this should be firebase user_id
          formData.append("name", user.displayName); // TODO: this should be firebase name
          formData.append("email", user.email); // TODO: this should be firebase email
          const res = await fetch.post("/users/register", formData, "form");
          if (res.user) {
            // user created succesfully
            toast.success("User has been successfully registered");
          } else {
            console.log(res.error);
            toast.error("Failed to register user");
            return;
          }
        }
        // Update State
        const loggedInUser: JwtUserSchema = {
          id: user.uid, // TODO: this should be firebase user_id
          email: user.email, // TODO: this should be firebase email
          name: user.displayName, // TODO: this should be firebase name
          registered: true,
        };
        const auth = getAuth();

        const id_token = (await auth.currentUser
          ?.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            return idToken;
          })
          .catch(function (error) {
            // Handle error
            console.log(error);
          })) as string;
        authContext.setAccessToken(id_token);
        authContext.setUser(loggedInUser);
        authContext.setIsLoggedIn(true);

        console.log("id_token:", id_token);

        toast.success("Log in successfully.");
        navigate(`${clientBaseUrl}dashboard`);
      } catch (e) {
        console.error("Error: ", e);
        toast.error("Failed to log in. Please try again later.");
      }
    }
  };

  useEffect(() => {
    if (authContext.isLoggedIn) {
      toast.success("Logged In Successfully. Welcome " + authContext.user.name);
      navigate(clientBaseUrl);
    } else {
      // Log in Results will only be parsed when user is redirected to this page back from the Google OAuth Log in
      parseLogInResult();
    }
  }, []);
  return (
    <>
      {/* Header */}
      <div className="bg-[#f2f2f2] min-h-screen">
        <section className="py-[42px] md:pt-[56px] md:pb-[35px] px-[48px] text-white flex flex-row justify-center gap-6">
          <div className="text-brand-gunmetal font-work-sans font-bold text-[30px] md:text-[40px] leading-tight text-center md:text-center above">
            Login
          </div>
        </section>
        {/* Login Methods */}
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[230px] md:max-w-[250px]">
            {/*
            Login with google buttons
            Note: Must use <a> for redirect purposes
          */}
            <div onClick={handleLogIn}>
              <div className="flex flex-row justify-center items-center bg-white md:py-[14px] md:px-[20px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] ml-[10px] border-none rounded-[4px] hover:bg-[#ebebeb] transition duration-300 shadow-normal-shadow hover:cursor-pointer hover:shadow-hover-shadow ">
                <div
                  style={{
                    backgroundImage:
                      "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=)",
                  }}
                  className="w-7 h-7 md:pl-[16px] pl-[12px] pt-[11px] pr-[28px] rounded bg-contain bg-no-repeat"
                />
                <span
                  style={{
                    fontFamily:
                      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif",
                  }}
                  className="text-[#757575] text-[16px] md:text-[18px] font-semibold "
                >
                  Login with Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
