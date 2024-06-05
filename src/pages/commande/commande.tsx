import ListeElementCommande from "components/site/commande/ListeElementCommande";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import commandeService from "services/commande.service";
import produitService from "services/produit.service";
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

    const [commandes, setCommandes] = useState([]) 
    
    const navigate = useNavigate()

    const call = async () => {
        const commandesEnBase = await commandeService.get()

        for(const commande of commandesEnBase){
            for (const produitIndex in commande.produits){
                const quantite = commande.produits[produitIndex].quantite
                commande.produits[produitIndex] = (await produitService.getById(
                    commande.produits[produitIndex].id
                ))
                commande.produits[produitIndex].quantite = quantite
            }
        }

        setCommandes(commandesEnBase)
        
      }

    useEffect(()=>{
        if(utilisateurService.getToken() == null) 
            navigate("/connection")
        call();
        
    }, [])

    return <main className="gap-2 py-8 px-12">
        {commandes.map((commande) => 
            <ListeElementCommande commande={commande}/>
        )}
    </main>
}