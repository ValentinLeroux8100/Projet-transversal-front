import React from "react";
import { Link } from "react-router-dom";
import Commande from "services/types/commande";

interface ListeElementCommandeProps{
    commande: any
}

export default function ListeElementCommande(props: ListeElementCommandeProps){
    const commande = props.commande
    console.log(commande)

    return <Link to={`${commande.id}`} key={commande.produits[0].nom} className="w-full flex flex-row place-content-between border-y-2 border-primary items-center">
        <div className="w-max">
            <h2 className="text-xl">{commande.dateDeCommande.slice(0,10)}</h2>
            <p>{commande.produits[0].nom}</p>
        </div>
    </Link>
}