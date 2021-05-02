import style from "../styles/components/PrimaryBtn.module.scss";

export default function PrimaryBtn({ children, onClick, className }) {
  return (
    <button className={`${style.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
