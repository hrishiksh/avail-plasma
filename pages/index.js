import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import { useEffect, useState } from "react";
import fire from "../config/fire-config";
import DonorList from "../components/DonorList";

export default function Home({ staticData, name }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <svg className={styles.header__search}>
          <use href="sprite.svg#icon-search" />
        </svg>
      </header>

      <main className={styles.main}>
        {/* Hero content with a register now button */}

        <section className={styles.main__hero}>
          <div className={styles.main__hero__textbtn}>
            <h1>Donate Plasma and Save lives</h1>
            <button>Register Now</button>
          </div>
          <img
            src="/homepage/blood-drop.svg"
            className={styles.main__hero__img}
          ></img>
        </section>

        {/* contain details of a plasma donor */}

        <section className={styles.main__details}>
          <h2 className={styles.main__details__title}>
            <span className={styles.main__details__title__bold}>Details</span>
            <span className={styles.main__details__title__subtitle}>
              (Plasma Donor)
            </span>
          </h2>
          <DonorList donorData={staticData} />
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fire.firestore().collection("donors").get();
  const normalizedRes = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(normalizedRes);

  return {
    props: {
      staticData: normalizedRes,
    },
  };
}
