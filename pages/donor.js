import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/pages/Donor.module.scss";
import { auth, db } from "../config/fire-config";
import PopUp from "../components/PopUp";
import PrimaryBtn from "../components/PrimaryBtn";
import { useState, useEffect } from "react";

export default function Search() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  useEffect(() => {
    console.log(auth().currentUser);
  });

  const [cardVisibility, setCardVisibility] = useState({
    isUser: undefined,
    iserror: undefined,
  });

  const submitData = (data) => {
    if (auth().currentUser) {
      db()
        .collection("donors")
        .doc(auth().currentUser.uid)
        .set(data, { merge: true })
        .then(() => {
          setCardVisibility({ isUser: true, iserror: false });
          console.log("Data entered");
        })
        .catch((err) => {
          setCardVisibility({ isUser: true, iserror: true });
          console;
        });
      return console.log("User is authenticated");
    } else if (auth().currentUser === null) {
      setCardVisibility({ isUser: false, iserror: false });
      return console.log("Please log in");
    }
  };

  const Card = () => {
    if (cardVisibility.isUser === true && cardVisibility.iserror === false) {
      return (
        <PopUp
          title="Thanks"
          subtitle="For registered as a plasma donor"
          imagePath="success.svg"
          onClick={() => router.push("/")}
          btnText="Go to Home Page"
        />
      );
    } else if (
      cardVisibility.isUser === true &&
      cardVisibility.iserror === true
    ) {
      return (
        <PopUp
          title="Sorry"
          subtitle="We are facing some errors"
          imagePath="warning.svg"
          onClick={() => router.push("/")}
          btnText="Go to Home Page"
        />
      );
    } else if (
      cardVisibility.isUser === false &&
      cardVisibility.iserror === false
    ) {
      return (
        <PopUp
          title="Oops"
          subtitle="Please Login to continue"
          imagePath="warning.svg"
          onClick={() => router.push("/login")}
          btnText="Go to Login Page"
        />
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <header className={style.header}>
        <img src="logo.svg" alt="logo" className={style.header__logo} />
      </header>
      <main className={style.main}>
        <h1 className={style.main__h1}>Register as Donor</h1>
        <p className={style.main__p}>
          <span>Please logIn before submission</span>
          <Link href="/login">
            <span>logIn</span>
          </Link>
        </p>
        <form onSubmit={handleSubmit(submitData)}>
          <input type="text" placeholder="Name" {...register("name")} />
          <input
            type="text"
            placeholder="Blood Group"
            {...register("bloodGr")}
          ></input>
          <input type="text" placeholder="State" {...register("state")} />
          <input type="text" placeholder="District" {...register("district")} />
          <input type="number" placeholder="Contact" {...register("contact")} />

          <PrimaryBtn type="submit">Submit</PrimaryBtn>
        </form>
      </main>

      {Card()}
    </>
  );
}
