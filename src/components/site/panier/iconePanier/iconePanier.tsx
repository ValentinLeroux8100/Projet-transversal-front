import React, { useEffect, useState } from "react";
import iconePanier from "assets/images/svgs/iconePanier.svg";
import styles from "./iconePanier.module.css";
import panierService from "services/panier.service";


export default function IconePanier() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    try{
    panierService.get()
    .then(result => {
      setCount(
        result.produits.reduce(
          (accumulator, product) => {return accumulator += product.quantite}, 
          0
        )
      )
    }).catch(error => console.log(error))
    }catch(e){console.log("pas vu pas pris")}
  }, [])

  return (
    <div className={styles.panier}>
      <img src={iconePanier} alt="icone panier" />
      {count !== 0 && <span>{count}</span>}
    </div>
  );
}
