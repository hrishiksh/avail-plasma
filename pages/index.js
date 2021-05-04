import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import { db } from "../config/fire-config";
import DonorList from "../components/DonorList";
import PrimaryBtn from "../components/PrimaryBtn";
import Share from "../components/Share";
import InfoCard from "../components/InfoCard";

export default function Home({ staticData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avail Plasma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="logo.svg" className={styles.header__logo} />
        <Share />
      </header>

      <main className={styles.main}>
        {/* Hero content with a register now button */}

        <section className={styles.main__hero}>
          <h1>Get help from people all over the world</h1>
          <p>An opensource platform to help covid patients</p>
          <PrimaryBtn href="/donor">Register now</PrimaryBtn>
        </section>

        {/* contain details of a plasma donor */}

        <section className={styles.main__details}>
          <h2 className={styles.main__details__title}>
            <span className={styles.main__details__title__bold}>
              Detail List
            </span>
            <span className={styles.main__details__title__subtitle}>
              (plasma seeker)
            </span>
          </h2>
          {staticData?.map((data) => (
            <InfoCard
              key={data.id}
              name={data.name}
              bloodGr={data.bloodGr}
              district={data.district}
              state={data.state}
              contact={data.contact}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  const res = await db().collection("donors").get();
  const normalizedRes = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(normalizedRes);

  return {
    props: {
      staticData: normalizedRes,
    },
    revalidate: 20,
  };
}
