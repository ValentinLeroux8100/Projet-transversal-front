import UiAirneisButton from "components/ui/form/button/button";
import IconeCarte from "assets/images/svgs/iconeCarte.svg";
import IconeAdresse from "assets/images/svgs/iconeAdresse.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Compte(){
    return <main className="gap-8 py-8 px-12">
        <section className="flex flex-col gap-8">
          <h2 className="titre-section pb-4">Utilisateur</h2>
          <div className="flex flex-row gap-4 justify-center">
            <Link to="carteBanquaire">
                <UiAirneisButton className="size-32 items-center" icon={IconeCarte} vertical>
                    Carte Banquaire
                </UiAirneisButton>
            </Link>
            <Link to="adresse">
                <UiAirneisButton className="size-32 items-center" icon={IconeAdresse} vertical>
                    Adresse
                </UiAirneisButton>
            </Link>
            </div>
        </section>
    </main>
}