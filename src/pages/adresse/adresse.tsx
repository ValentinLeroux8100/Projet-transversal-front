import CardAdresse from "components/site/adresse/cardAdresse";
import React from "react";

export default function Adresse() {
    const mockAdresse = [{
        codePostal: "23451",
        numeroDeRue: "32",
        informations:  "efk,lzfe",
        ville: "lille",
        departement : "haut-de-france"
    }]

    return (
      <main className="gap-8 py-8 px-12">
        <section className="flex flex-col items-center">
          <form action="" className="w-full sm:w-1/2 flex flex-col gap-4">
            <h2 className="titre-section">Adresse</h2>
            <ul>
                {mockAdresse.map((adresse) => 
                    <CardAdresse adresse={adresse}/>
                )}
            </ul>
          </form>
        </section>
      </main>
    );
  }
  