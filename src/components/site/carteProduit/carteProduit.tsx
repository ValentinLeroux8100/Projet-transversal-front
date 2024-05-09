import React from "react";
import styles from "./carteProduit.module.css";
import meubleImage from "assets/images/mocks/meuble.jpg";

interface CarteProduitProps {
  nom: string;
  description?: string;
  prix: number;
  image: string;
}

export default function CarteProduit(props: CarteProduitProps) {
  return (
    <div className={styles["carte-produit"]}>
      <img src={props.image} alt={props.nom} />
      <div className={styles["description"]}>
        <div>
          <h2>{props.nom}</h2>
          <h3>{props.description}</h3>
        </div>
        <span>{props.prix}€</span>
      </div>
    </div>
  );
}
