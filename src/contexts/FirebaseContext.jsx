import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
/*****************************************/

export const AuthContext = createContext();
const auth = getAuth(app);

/*****************************************/
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
/*****************************************/

function FirebaseContext({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [navToggler, setNavToggler] = useState(false);

  /*****************************************/
  const regiseterUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    setLoading(true);

    return signOut(auth);
  };
  const loginWithFacebook = () => {
    setLoading(true);

    return signInWithPopup(auth, facebookProvider);
  };
  const loginWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };
  /*****************************************/

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubs();
  }, []);

  const authData = {
    user,
    regiseterUser,
    loginUser,
    resetPassword,
    logOut,
    updateUserProfile,
    loginWithFacebook,
    loginWithGoogle,
    loginWithGithub,
    loading,
    navToggler,
    setNavToggler,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default FirebaseContext;
