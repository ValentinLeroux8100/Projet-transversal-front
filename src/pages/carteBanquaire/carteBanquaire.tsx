
import ListeElementCarteBanquaire from "components/site/carteBanquaire/ListElementCarteBanquaire";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";

export default function CarteBanquaire() {
    const mockCarte = [{
      numero: "1234123412341234",
      nom: "carte",
      mois: 1,
      annee: 25,
      ccv: 234,
    }]

    const navigate = useNavigate()

    useEffect(()=>{
      if(utilisateurService.getToken() == null) 
        navigate("/connection")
    }, [])
    

    return (
      <main className="gap-8 py-8 px-12">
        <section className="flex flex-col items-center">
          <form action="" className="w-full sm:w-1/2 flex flex-col gap-4">
            <h2 className="titre-section">Carte Banquaire</h2>
            <ul>
                {mockCarte.map((carte) => 
                    <ListeElementCarteBanquaire carte={carte}/>
                )}
            </ul>
          </form>
        </section>
      </main>
    );
  }
  