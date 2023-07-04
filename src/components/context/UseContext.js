import React, { createContext } from "react";
import app from "../../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

// google auth provider //
const provider = new GoogleAuthProvider();

const UseContext = ({ children }) => {
  const user = {
    name: "Sazzad Hossain Tomal",
  };

  // create user by Email and Password //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //................................//

  // SignIn in with Google //
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Login User //
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, createUser, signInWithGoogle, signInUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
