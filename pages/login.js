import { useState, useEffect } from "react";
import { auth } from "../config/fire-config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import style from "../styles/pages/Login.module.scss";

export default function UiSign() {
  const uiconfig = {
    signInFlow: "popup",
    signInOptions: [
      {
        provider: auth.GoogleAuthProvider.PROVIDER_ID,
        scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
        customParameters: {
          prompt: "select_account",
        },
      },
      auth.PhoneAuthProvider.PROVIDER_ID,
      auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "/",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log(authResult.user);
        console.log(authResult.credential);
        console.log(authResult.operationType);
        console.log(redirectUrl);
        return true;
      },
    },
  };

  const [user, setUser] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      console.log(`AUTH_STATE --> ${user.displayName}`);
    });
  }, []);

  return (
    <>
      <header className={style.header}>
        <img src="logo.svg" alt="logo" className={style.header__logo} />
      </header>
      <main className={style.main}>
        <h1>Account</h1>
        <p>Log-in or create your account</p>
        <StyledFirebaseAuth
          uiConfig={uiconfig}
          firebaseAuth={auth()}
        ></StyledFirebaseAuth>
      </main>
    </>
  );
}
