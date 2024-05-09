import React from "react";
import styles from "./carteCategorie.module.css";

interface CarteCategorieProps {
  nom: string;
  image: string;
}

export default function CarteCategorie(props: CarteCategorieProps) {
  return (
    <div className={styles["carte-categorie"]}>
      <img src={props.image} alt="" />
      <div className={styles["description"]}>
        <h2>{props.nom}</h2>
      </div>
    </div>
  );
}
