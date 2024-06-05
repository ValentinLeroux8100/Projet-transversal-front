import React, { useEffect, useState } from "react";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisSelect from "components/ui/form/select/select";
import panierService from "services/panier.service";
import produitService from "services/produit.service";
import ListeProduitCheckout from "components/site/checkout/listeProduitCheckout/listeProduitCheckout";
import utilisateurService from "services/utilisateur.service";
import { useNavigate } from "react-router-dom";
import adresseService from "services/adresse.service";
import carteBanquaireService from "services/carteBanquaire.service";

export default function Checkout() {

  const [produits, setProduits] = useState([])
  const [adresses, setAdresses] = useState([])
  const [cartes, setCartes] = useState([])
  const [adresseFinal, setAdresseFinal] = useState()
  const [carteFinal, setCarteFinal] = useState()
  const navigate = useNavigate()

  const valideCommande = () => { 
    console.log(adresseFinal, carteFinal)
    panierService.validCommand(adresseFinal, carteFinal)
      .then(response => {if(response.status == 200)navigate("/compte");})
  }

  const adresseChange = (event) => {
    setAdresseFinal(adresses[event.target.selectedIndex])
  }

  const carteChange = (event) => {
    setCartes(cartes[event.target.selectedIndex])
  }

  useEffect(() => {
    const call = async () => {
      const panier = (await panierService.get())
      const produitsEnBase = await Promise.all(panier.produits.map(async (produit) => {
        const produitEnBase = await produitService.getById(produit.id);
        produitEnBase.quantite = produit.quantite;
        return produitEnBase
      }))
      
      adresseService.get().then(adressesEnBase => {
        setAdresses(adressesEnBase)
        setAdresseFinal(adressesEnBase[0])
      })
      carteBanquaireService.get().then(cartesEnBase => {
        setCartes(cartesEnBase)
        setCarteFinal(cartesEnBase[0])
      })
 
      setProduits(produitsEnBase)
    }

    if(utilisateurService.getToken() == null) 
      navigate("/connection")
    else
      call();
  }, [])

  return (
    <main className="lg:grid lg:grid-cols-2">
      <section className="bg-thirdy py-8 px-32">
        <div className="flex flex-col gap-4">
          <h2 className="titre-section pb-4">Acheter</h2>
          <UiAirneisSelect onChange={adresseChange} values={
            adresses.map(adresse => `${adresse.numeroDeRue} ${adresse.ville}`)
          } />
          <UiAirneisSelect onChange={carteChange} values={cartes.map(carte => `**** **** **** ${carte.numeroCarte.slice(-4)}`)} />
          <div className="flex flex-row gap-4 w-full">
            <UiAirneisButton className="w-full" onClick={valideCommande}>Payer</UiAirneisButton>
          </div>
        </div>
      </section>

      <aside>
        <h2 className="titre-section py-8">Résumé de la Commande</h2>
        <ListeProduitCheckout produits={produits}></ListeProduitCheckout>
      </aside>
    </main>
  );
}
