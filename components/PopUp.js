import PrimaryBtn from "./PrimaryBtn";
import style from "../styles/components/Popup.module.scss";

export default function PopUp({
  title,
  subtitle,
  imagePath,
  btnText,
  onClick,
}) {
  return (
    <>
      <div className={style.background}>
        <div className={style.card}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <img src={imagePath} />
          <PrimaryBtn onClick={onClick} className={style.modBtn}>
            {btnText}
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
}
