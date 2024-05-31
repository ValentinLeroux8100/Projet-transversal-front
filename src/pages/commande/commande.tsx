import ListeElementCommande from "components/site/commande/ListeElementCommande";
import React from "react";
import CommandeType from "services/types/commande";
import Produit from "services/types/produit";

export default function Commande(){
    const data = new CommandeType()
    data.dateCommande = Date.now();
    const produit = new Produit();
    produit.nom = "table"
    data.produits= [produit]

    return <main className="gap-8 py-8 px-12">
        <ListeElementCommande commande={data}/>
    </main>
}