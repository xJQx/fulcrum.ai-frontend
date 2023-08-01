import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      return { token: token, user: user };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log("errorCode: " + errorCode);
      console.log("errorMessage: " + errorMessage);
      console.log("email: " + email);
      console.log("credential: " + credential);
      // ...
    });
  return null;
};

export const signOutWithGoogle = async () => {
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
      return true;
    })
    .catch((error) => {
      // An error happened.
      console.log("error: ", error);
      return false;
    });
};
