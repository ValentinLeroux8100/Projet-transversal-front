import React from "react";
import CarteProduit from "components/site/carteProduit/carteProduit";
import CarteCategorie from "components/site/carteCategorie/carteCategorie";
import Categorie from "services/types/categorie";
import Produit from "services/types/produit";
import acceuilFixtureData from "fixture/acceuilFixture";

export default function Acceuil() {
  const data = acceuilFixtureData;

  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8 ">
        <div className="flex flex-row flex-wrap place-content-evenly gap-4 p-4">
          {data.categories.map((categorie) => {
            return (
              <CarteCategorie
                image={categorie.image}
                nom={categorie.nom}
              ></CarteCategorie>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-black text-5xl font-semibold font-body capitalize">
          Les Highlanders du moment
        </h2>
        <div className="flex flex-row flex-wrap   place-content-around gap-4 p-4">
          {data.produits.map((produit) => {
            return (
              <CarteProduit
                nom={produit.nom}
                description={produit.description}
                prix={produit.prix}
                image={produit.image}
              ></CarteProduit>
            );
          })}
        </div>
      </section>
    </main>
  );
}
