import React from "react";
import iconePanier from "assets/images/svgs/iconePanier.svg";
import styles from "./iconePanier.module.css";

type Props = {
  nombreObjetsPanier?: number;
};

export default function IconePanier(props: Props) {
  const { nombreObjetsPanier } = { ...props };

  return (
    <div className={styles.panier}>
      <img src={iconePanier} alt="icone panier" />
      {nombreObjetsPanier !== 0 && <span>{nombreObjetsPanier}</span>}
    </div>
  );
}
