import ListeElementCommande from "components/site/commande/ListeElementCommande";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommandeType from "services/types/commande";
import Produit from "services/types/produit";
import utilisateurService from "services/utilisateur.service";

export default function Commande(){
    //temp
    const data = new CommandeType()
    data.dateCommande = Date.now();
    const produit = new Produit();
    produit.nom = "table"
    data.produits= [produit]
    //temp
    
    const navigate = useNavigate()

    useEffect(()=>{
        if(utilisateurService.getToken() == null) 
            navigate("/connection")
    }, [])
    
    return <main className="gap-8 py-8 px-12">
        <ListeElementCommande commande={data}/>
    </main>
}