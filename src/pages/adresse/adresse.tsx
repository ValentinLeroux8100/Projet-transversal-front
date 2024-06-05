import ListeElementAdresse from "components/site/adresse/listeElementAdresse";
import UiAirneisButton from "components/ui/form/button/button";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adresseService from "services/adresse.service";
import utilisateurService from "services/utilisateur.service";

export default function Adresse() {
    const navigate = useNavigate()
    const [adresses, setAdresses] = useState([])
    useEffect(()=>{
      
      adresseService.get().then(adressesEnBase => {
        setAdresses(adressesEnBase)
      })

      if(utilisateurService.getToken() == null) 
        navigate("/connection")
    }, [])

    return (
      <main className="gap-8 py-8 px-12">
        <section className="flex flex-col items-center">
            <h2 className="titre-section">Adresse</h2>
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
              <ul>
                  {adresses.map((adresse) => 
                      <ListeElementAdresse adresse={adresse}/>
                  )}
              </ul>
            </div>
            <Link to="ajout">
              <UiAirneisButton>Ajouter une adresse</UiAirneisButton>
            </Link>
        </section>
      </main>
    );
  }
  