import style from "../styles/components/PrimaryBtn.module.scss";
import Link from "next/link";

export default function PrimaryBtn({
  children,
  type,
  onClick,
  className,
  href,
}) {
  if (href) {
    return (
      <Link href={href}>
        <button type={type} className={`${style.btn} ${className}`}>
          {children}
        </button>
      </Link>
    );
  }
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
