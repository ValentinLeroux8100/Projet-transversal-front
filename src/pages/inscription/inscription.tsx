import React from "react";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import UiAirneisButton from "components/ui/form/button/button";

export default function Inscription() {
  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col items-center">
        <form action="" className="p-y-40 flex flex-col gap-4">
          <h2 className="titre-section">Inscription</h2>
          <div className="flex flex-row gap-4">
            <UiAirneisInputText
              placeholder="Doe"
              label="Nom"
            ></UiAirneisInputText>
            <UiAirneisInputText
              placeholder="John"
              label="Prénom"
            ></UiAirneisInputText>
          </div>
          <UiAirneisInputText
            placeholder="Jhon.doe@meuble.fr"
            label="Mail"
          ></UiAirneisInputText>
          <UiAirneisInputText
            placeholder="*******"
            label="Mots de passe"
          ></UiAirneisInputText>

          <div className="w-full flex flex-col">
            <span>Déjà un compte ? Connectez-vous.</span>
            <UiAirneisButton>Créer compte</UiAirneisButton>
          </div>
        </form>
      </section>
    </main>
  );
}
