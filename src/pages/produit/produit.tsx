import React from "react";
import CarteProduit from "components/site/carteProduit/carteProduit";
import produitFixtureData from "fixture/produitFixture";
import UiAirneisButton from "components/ui/form/button/button";
import iconeRecherche from "assets/images/svgs/iconeBurgerMenu.svg";

export default function Produit() {
  const data = produitFixtureData;

  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8 md:grid md:grid-cols-[600px_auto]">
        <div>
          <img
            src={data.produit.image}
            alt=""
            className="rounded-lg aspect-[15/8] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 md:place-content-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row place-content-between ">
              <div className="gap-2">
                <h2 className="text-xl">{data.produit.nom}</h2>
                <p className="text-zinc-400">en stock</p>
              </div>
              <span className="py-2 px-3 h-fit rounded-full bg-valid">
                {data.produit.prix} €
              </span>
            </div>

            <p className="text-justify">{data.produit.description}</p>
          </div>
          <div className="flex gap-2 w-full">
            <UiAirneisButton className="w-full">
              Ajouter au panier
            </UiAirneisButton>
            <UiAirneisButton className="w-full">Acheter</UiAirneisButton>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-center text-black text-3xl font-semibold font-body capitalize">
          Produit similaire
        </h2>
        <div className="flex flex-row flex-wrap place-content-evently justify-center gap-8 p-4">
          {data.produitsRecommandes.map((produit) => {
            return <CarteProduit produit={produit}></CarteProduit>;
          })}
        </div>
      </section>
    </main>
  );
}
