import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import FormulaireAdresse from "components/site/adresse/formulaireAdresse";

export default function AjoutAdresse() {
  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col items-center">
        <form action="" className="w-full sm:w-1/2 flex flex-col gap-4">
          <h2 className="titre-section">Ajout adresse</h2>
          <FormulaireAdresse />
          <UiAirneisButton>Ajouter</UiAirneisButton>
        </form>
      </section>
    </main>
  );
}
