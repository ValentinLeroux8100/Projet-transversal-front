import React from "react";
import styles from "./carteProduit.module.css";
import { Link } from "react-router-dom";
import Produit from "services/types/produit";

interface CarteProduitProps {
  produit: Produit;
}

export default function CarteProduit(props: CarteProduitProps) {
  const { id, image, nom, description, prix } = { ...props.produit };

  return (
    <Link to={`/produits/${id}`} className={styles["carte-produit"]}>
      <img src={image} alt={nom} />
      <div className={styles["description"]}>
        <div>
          <h2>{nom}</h2>
          <h3>{description}</h3>
        </div>
        <span>{prix} €</span>
      </div>
    </Link>
  );
}
