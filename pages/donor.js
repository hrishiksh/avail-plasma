import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/pages/Donor.module.scss";
import { auth, db } from "../config/fire-config";

export default function Search() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const submitData = (data) => {
    if (auth().currentUser) {
      db()
        .collection("donors")
        .doc(auth().currentUser.uid)
        .set(data, { merge: true })
        .then(() => console.log("Successfully written"))
        .catch((err) => console.error(err));
      // router.push("/");
      return console.log("User is authenticated");
    }
    return console.log("Please log in");
  };

  return (
    <>
      <header className={style.header}>
        <img src="logo.svg" alt="logo" className={style.header__logo} />
      </header>
      <main className={style.main}>
        <h1 className={style.main__h1}>Register as Donor</h1>
        <p className={style.main__p}>
          <span>Please logIn before registration</span>
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

          {/* <Link href="/"> */}
          <button type="submit">Submit</button>
          {/* </Link> */}
        </form>
      </main>
    </>
  );
}
