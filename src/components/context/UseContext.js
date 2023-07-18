import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

// google auth provider //
const provider = new GoogleAuthProvider();

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);

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

  // LogOut User //
  const logOutUser = () => {
    return signOut(auth);
  };

  // user profile name display in ui //
  const updateUserProfile = (profile) => {
    console.log(profile);
    return updateProfile(auth.currentUser, profile);
  };

  // get current User //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        // console.log(currentUser);
        setUser(currentUser);
      }
    });

    return () => unSubScribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    signInWithGoogle,
    signInUser,
    updateUserProfile,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
