import { useState, useContext } from "react";
import { auth } from "../config/fire-config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import style from "../styles/pages/Login.module.scss";
import PopUp from "../components/PopUp";
import PrimaryBtn from "../components/PrimaryBtn";
import { usercontext } from "../state/context/userProvider";

export default function UiSign() {
  const [isError, setIsError] = useState(false);
  const user = useContext(usercontext);

  const uiconfig = {
    signInFlow: "redirect",
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
      signInFailure: (error) => {
        console.log(error.code);
        setIsError(true);
      },
    },
  };

  return (
    <>
      <header className={style.header}>
        <img src="logo.svg" alt="logo" className={style.header__logo} />
      </header>
      <main className={style.main}>
        <h1>Account</h1>
        <p>Log-in or create your account</p>
        {user ? (
          <div className={style.logInMsg}>
            <h3 className={style.logInMsg__h3}>You have already logged in</h3>
            <PrimaryBtn className={style.logInMsg__btn} href="/">
              Go back
            </PrimaryBtn>
          </div>
        ) : (
          <>
            <StyledFirebaseAuth
              uiConfig={uiconfig}
              firebaseAuth={auth()}
            ></StyledFirebaseAuth>
          </>
        )}
      </main>
      {isError && (
        <PopUp
          title="Oops!"
          subtitle="Error! Please try again"
          imagePath="warning.svg"
          btnText="Try again"
          onClick={() => setIsError(false)}
        ></PopUp>
      )}
    </>
  );
}
