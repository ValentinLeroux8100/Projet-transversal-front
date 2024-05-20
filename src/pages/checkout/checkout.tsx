import React from "react";
import FormulaireAdresse from "components/site/adresse/formulaireAdresse";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisSelect from "components/ui/form/select/select";
import UiAirneisCheckbox from "components/ui/form/checkbox/checkbox";

export default function Checkout() {
  return (
    <main className="gap-8 md:grid md:grid-cols-2">
      <section className="bg-thirdy py-8 px-32">
        <form className="flex flex-col gap-4">
          <h2 className="titre-section pb-4">Adresse Livraison</h2>
          <UiAirneisSelect values={[""]} />
          <FormulaireAdresse />
          <label className="flex flex-row gap-4 items-center">
            <UiAirneisCheckbox />
            Utiliser la même adresse pour la facturation
          </label>
          <div className="flex flex-row gap-4 w-full">
            <UiAirneisButton className="w-full">Précédent</UiAirneisButton>
            <UiAirneisButton className="w-full">Suivant</UiAirneisButton>
          </div>
        </form>
      </section>

      <aside>
        <h2 className="titre-section py-8">Résumé de la Commande</h2>
      </aside>
    </main>
  );
}
