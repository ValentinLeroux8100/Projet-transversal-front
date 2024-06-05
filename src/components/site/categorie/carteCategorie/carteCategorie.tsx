import React from "react";
import styles from "./carteCategorie.module.css";
import { Link } from "react-router-dom";
import Categorie from "services/types/categorie";

interface CarteCategorieProps {
  categorie: Categorie;
}

export default function CarteCategorie(props: CarteCategorieProps) {
  const {nom, image, id} = {...props.categorie}

  return (
    <Link to={`/categories/${id}`} key={nom} className={styles["carte-categorie"]}>
      <img src={image} alt="" />
      <div className={styles["description"]}>
        <h2>{nom}</h2>
      </div>
    </Link>
  );
}
