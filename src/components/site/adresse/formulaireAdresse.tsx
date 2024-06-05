import React from "react";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import Adresse from "services/types/adresse";

interface FormulaireAdresseProps{
  addresse?: Adresse
}

export default function FormulaireAdresse(props: FormulaireAdresseProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-4">
        <UiAirneisInputText name="prenom" placeholder="John" label="Prénom"/>
        <UiAirneisInputText name="nom" placeholder="doe" label="Nom" />
      </div>
      <UiAirneisInputText name="rue" placeholder="32 paper street" label="Adresse" />
      <div className="flex flex-col md:flex-row gap-4">
        <UiAirneisInputText name="code" placeholder="00000" label="Code Postal" value={props.addresse?.codePostal}/>
        <UiAirneisInputText name="ville" placeholder="Lille" label="Ville" value={props.addresse?.ville}/>
      </div>
      <UiAirneisInputText name="pays" placeholder="France" label="Pays" />
      <UiAirneisInputText name="region" placeholder="Haut-de-France" label="Région" />
      <UiAirneisInputText name="departement" placeholder="Nord" label="Département" />
      <UiAirneisInputText
        name="telephone"
        placeholder="0606060606"
        label="Numéro de téléphone"
      />
    </>
  );
}
