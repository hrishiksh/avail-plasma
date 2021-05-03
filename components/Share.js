import styles from "../styles/components/Share.module.scss";

export default function Share() {
  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Avail Plasma",
          text: "Donate for a better cause",
          url: "https://avail-plasma.vercel.app",
        })
        .then(() => console.log("Successful share"))
        .catch((err) => console.log("Error sharing", err));
    }
  };
  return (
    <svg onClick={onShare} className={styles.icon}>
      <use href="sprite.svg#icon-share-2" />
    </svg>
  );
}
