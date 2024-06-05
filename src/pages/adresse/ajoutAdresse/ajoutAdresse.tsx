import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import FormulaireAdresse from "components/site/adresse/formulaireAdresse";
import Adresse from "services/types/adresse";
import adresseService from "services/adresse.service";
import { useNavigate } from "react-router-dom";

export default function AjoutAdresse() {
  const navigate = useNavigate()

  const addAdresse = (event) => {
    event.preventDefault()
    const inputs = Array.from(event.target)

    let isComplete = true

    inputs.map(input => {
      isComplete = isComplete && (input["value"] != "" || input["tagName"] == "BUTTON")
    })

    if (!isComplete) return

    const data = inputs.reduce(
      (adresse: Object, input: any) => {
        if(input["tagName"] == "INPUT")
          return {... adresse, [input["name"]] : input.value}
        else 
          return adresse
      }
      , {}
    )
    
    const adresse = new Adresse()
    adresse.codePostal = data["code"]
    adresse.nom = data["nom"]
    adresse.prenom = data["prenom"]
    adresse.pays = data["pays"]
    adresse.informations = ""
    adresse.telephone = data["telephone"]
    adresse.ville = data["ville"]
    adresse.numeroDeRue = data["rue"] 

    adresseService.add(adresse).then((response) => {
      if(response.status == 201)
        navigate("/compte/adresse")
      })
  }

  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col items-center">
        <form className="w-full sm:w-1/2 flex flex-col gap-4" onSubmit={addAdresse}>
          <h2 className="titre-section">Ajout adresse</h2>
          <FormulaireAdresse />
          <UiAirneisButton>Ajouter</UiAirneisButton>
        </form>
      </section>
    </main>
  );
}
