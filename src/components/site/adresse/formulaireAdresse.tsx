import React from "react";
import UiAirneisInputText from "components/ui/form/inputText/inputText";

export default function FormulaireAdresse() {
  return (
    <>
      <div className="flex flex-row gap-4">
        <UiAirneisInputText placeholder="John" label="Prénom" />
        <UiAirneisInputText placeholder="doe" label="Nom" />
      </div>
      <UiAirneisInputText placeholder="32 paper street" label="Adresse" />
      <div className="flex flex-row gap-4">
        <UiAirneisInputText placeholder="00000" label="Code Postal" />
        <UiAirneisInputText placeholder="Lille" label="Ville" />
      </div>
      <UiAirneisInputText placeholder="Haut-de-France" label="Région" />
      <UiAirneisInputText placeholder="France" label="Pays" />
      <UiAirneisInputText
        placeholder="0606060606"
        label="Numéro de téléphone"
      />
    </>
  );
}
