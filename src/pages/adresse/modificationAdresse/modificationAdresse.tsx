import FormulaireAdresse from "components/site/adresse/formulaireAdresse";
import React from "react";

export default function ModificationAdresse(){
    const address = {
        codePostal: "23451",
        numeroDeRue: "32",
        informations:  "efk,lzfe",
        ville: "lille",
        departement : "haut-de-france"
    }

    return <main className="gap-8 py-8 px-12">
        <form action="" className="flex flex-col gap-4">
            <FormulaireAdresse addresse={address}/>
        </form>
    </main>
    
}