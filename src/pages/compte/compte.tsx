import UiAirneisButton from "components/ui/form/button/button";
import IconeCarte from "assets/images/svgs/iconeCarte.svg";
import IconeAdresse from "assets/images/svgs/iconeAdresse.svg";
import IconeCommande from "assets/images/svgs/iconeCommande.svg"
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";

export default function Compte(){
    const navigate = useNavigate()

    useEffect(()=>{
        if(utilisateurService.getToken() == null) 
            navigate("/connection")
    }, [])
    
    
    return <main className="gap-8 py-8 px-12">
        <section className="flex flex-col gap-8">
          <h2 className="titre-section pb-4">Utilisateur</h2>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Link to="carteBanquaire">
                <UiAirneisButton className="size-32 items-center" icon={IconeCarte} vertical>
                    Carte Banquaire
                </UiAirneisButton>
            </Link>
            <Link to="adresse">
                <UiAirneisButton className="size-32 items-center" icon={IconeAdresse} vertical>
                    Adresse
                </UiAirneisButton>
            </Link>

            <Link to="commande">
                <UiAirneisButton className="size-32 items-center" icon={IconeCommande} vertical>
                    Commandes
                </UiAirneisButton>
            </Link>
            </div>
        </section>
    </main>
}