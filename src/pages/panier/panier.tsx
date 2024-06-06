import React, { useEffect, useState } from "react";
import ListeProduitPanier from "components/site/panier/listeProduitPanier/listeProduitPanier";
import TotalPanier from "components/site/panier/totalPanier/totalPanier";
import panierService from "services/panier.service";
import produitService from "services/produit.service";
import { useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";

export default function Panier() {

  const [produits, setProduits] = useState([])
  const [produitsOriginal, setProduitsOriginal] = useState([])
  const navigate = useNavigate()

  const validatePanier = () => {
    if(produits != produitsOriginal){
      panierService.patch(produits)
      .then(result => {
        if(result.status == 200)
          navigate("/checkout")
      })
    }else{
      navigate("/checkout")
    }
  }
  
  const handleChange = (event) => {
    setProduits(produits.map(produit => {
      if(produit == event.produit){
        produit.quantite = event.newQuantite
      }
      return produit
    }))
  }


  useEffect(() => {
      const call = async () => {
      const panier = (await panierService.get())
      const produitsEnBase = await Promise.all(panier.produits.map(async (produit) => {
        const produitEnBase = await produitService.getById(produit.id);
        produitEnBase.quantite = produit.quantite;
        return produitEnBase
      }))
      
      setProduits(produitsEnBase)
      setProduitsOriginal(produitsEnBase)
    }

    if(utilisateurService.getToken() == null) {
      navigate("/connection")
    }else{
      call();
    }
  }, [])

  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col gap-8">
        <h2 className="titre-section">Panier</h2>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[50%_40%] w-full justify-between">
          <ListeProduitPanier produits={produits} onChange={handleChange}/>
          <TotalPanier produits={produits} onValidate={validatePanier}/>
        </div>
      </section>
    </main>
  );
}
