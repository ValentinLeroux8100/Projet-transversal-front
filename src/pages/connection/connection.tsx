import React from "react";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import UiAirneisButton from "components/ui/form/button/button";
import { Link } from "react-router-dom";

export default function Connection() {
  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col items-center">
        <form action="" className="w-full sm:w-1/2 flex flex-col gap-4">
          <h2 className="titre-section">Connection</h2>
          <UiAirneisInputText
            placeholder="Jhon.doe@meuble.fr"
            label="Mail"
          ></UiAirneisInputText>
          <UiAirneisInputText
            placeholder="*******"
            label="Mots de passe"
          ></UiAirneisInputText>

          <div className="w-full flex flex-col">
            <span>Pas de compte ? <Link to="../inscription" className="text-primary-700"> 
            Inscrivez-vous.
            </Link></span>
            <UiAirneisButton>Se connecter</UiAirneisButton>
          </div>
        </form>
      </section>
    </main>
  );
}
