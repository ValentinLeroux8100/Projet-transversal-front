import ListeElementAdresse from "components/site/adresse/listeElementAdresse";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";

export default function Adresse() {
    const mockAdresse = [{
        codePostal: "23451",
        numeroDeRue: "32",
        informations:  "efk,lzfe",
        ville: "lille",
        departement : "haut-de-france"
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
            <h2 className="titre-section">Adresse</h2>
            <ul>
                {mockAdresse.map((adresse) => 
                    <ListeElementAdresse adresse={adresse}/>
                )}
            </ul>
          </form>
        </section>
      </main>
    );
  }
  