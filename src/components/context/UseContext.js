import React, { createContext } from "react";
import app from "../../firebase/firebase.init";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const UseContext = () => {
  return <div></div>;
};

export default UseContext;
