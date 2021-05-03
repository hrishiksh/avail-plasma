import style from "../styles/components/PrimaryBtn.module.scss";

export default function PrimaryBtn({ children, type, onClick, className }) {
  return (
    <button
      type={type}
      className={`${style.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
