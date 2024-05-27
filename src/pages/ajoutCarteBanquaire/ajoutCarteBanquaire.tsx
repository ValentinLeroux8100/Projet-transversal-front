import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisInputText from "components/ui/form/inputText/inputText";

export default function AjoutCarteBanquaire() {
    return (
        <main className="gap-8 py-8 px-12">
            <section className="flex flex-col items-center">
                <form action="" className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h2 className="titre-section">Ajout adresse</h2>
                    <UiAirneisInputText placeholder="**** **** **** 1234" label="Numéro de carte" />

                    <div className="flex flex-row gap-4">
                        <UiAirneisInputText placeholder="10" label="Mois" />
                        <UiAirneisInputText placeholder="11" label="Année" />
                    </div>
                    <div className="w-14">
                        <UiAirneisInputText placeholder="123" label="CVV" />
                    </div>
                    <UiAirneisInputText
                        placeholder="John Doe"
                        label="Nom de carte"
                    />
                    <UiAirneisButton>Ajouter</UiAirneisButton>
                </form>
            </section>
        </main>
    );
}
