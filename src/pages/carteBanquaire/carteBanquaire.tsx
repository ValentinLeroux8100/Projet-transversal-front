
import ListeElementCarteBanquaire from "components/site/carteBanquaire/ListElementCarteBanquaire";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import carteBanquaireService from "services/carteBanquaire.service";
import utilisateurService from "services/utilisateur.service";
import {carteBanquaireRestToCarteBanquaire} from "services/mapper/carteBanquaireMapper";
import UiAirneisButton from "components/ui/form/button/button";

export default function CarteBanquaire() {
    const [cartes, setCartes] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
      const call = async () => {
        carteBanquaireService.get().then(cartesEnBase => {
          setCartes(cartesEnBase.map((carte) => {
            return carteBanquaireRestToCarteBanquaire(carte)
          }))
        })
      }

      if(utilisateurService.getToken() == null) 
        navigate("/connection")
      else
        call();
    }, [])
    

    return (
      <main className="gap-8 py-8 px-12">
        <section className="flex flex-col items-center">
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <h2 className="titre-section">Carte Banquaire</h2>
            <ul>
                {cartes.map((carte) => 
                    <ListeElementCarteBanquaire carte={carte}/>
                )}
            </ul>
          </div>
          <Link to="ajout">
            <UiAirneisButton>Ajouter une carte banquaire</UiAirneisButton>
          </Link>
        </section>
      </main>
    );
  }
  