import { useForm } from "react-hook-form";
import Link from "next/link";
import style from "../styles/pages/Donor.module.scss";

export default function Search() {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => console.log(data);

  return (
    <>
      <header className={style.header}>
        <img src="logo.svg" alt="logo" className={style.header__logo} />
      </header>
      <main className={style.main}>
        <h1 className={style.main__h1}>Register as Donor</h1>
        <p className={style.main__p}>
          <span>Please logIn before registration</span>
          <span>logIn</span>
        </p>
        <form onSubmit={handleSubmit(submitData)}>
          <div>
            <input type="text" placeholder="Name" {...register("name")} />
            <input
              type="text"
              placeholder="Blood Group"
              {...register("bloodGr")}
            ></input>
            <input type="text" placeholder="State" {...register("state")} />
            <input
              type="text"
              placeholder="District"
              {...register("district")}
            />
            <input
              type="number"
              placeholder="Contact"
              {...register("contact")}
            />
          </div>
          <Link href="/">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </main>
    </>
  );
}
