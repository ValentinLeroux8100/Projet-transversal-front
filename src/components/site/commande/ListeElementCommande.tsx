import React from "react";
import Commande from "services/types/commande";

interface ListeElementCommandeProps{
    commande: Commande
}

export default function ListeElementCommande(props: ListeElementCommandeProps){
    const commande = props.commande

    return <div className="w-full flex flex-row place-content-between border-y-2 border-primary items-center">
        <div className="w-max">
            <h2 className="text-xl">{new Date(commande.dateCommande).toLocaleString("fr-FR", {timeZone: 'UTC'})}</h2>
            <p>{commande.produits[0].nom}</p>
        </div>
    </div>
}