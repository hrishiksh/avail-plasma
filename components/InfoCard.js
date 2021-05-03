import { useContext } from "react";
import { usercontext } from "../state/context/userProvider";

import style from "../styles/components/InfoCard.module.scss";

export default function InfoCard({ name, bloodGr, state, district, contact }) {
  const user = useContext(usercontext);
  return (
    <div className={style.InfoCard}>
      <div className={style.InfoCard__textBlock}>
        <h3>
          <span>{name}</span>
          <span>{bloodGr}</span>
        </h3>
        <p>
          <span>{district},</span>
          <span>{state}</span>
        </p>
      </div>
      {user ? (
        <a href={`tel:+91${contact}`}>
          <svg>
            <use href="sprite.svg#icon-phone" />
          </svg>
        </a>
      ) : (
        <a>
          <svg>
            <use href="sprite.svg#icon-lock" />
          </svg>
        </a>
      )}
    </div>
  );
}
