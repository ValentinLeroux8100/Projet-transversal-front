import React from "react";
import CarteProduit from "components/site/carteProduit/carteProduit";
import CarteCategorie from "components/site/carteCategorie/carteCategorie";

export default function Acceuil() {
  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8 ">
        <div className="flex flex-row md:h-[300px] flex-wrap place-content-around gap-4 p-4">
          <CarteCategorie></CarteCategorie>
          <CarteCategorie></CarteCategorie>
          <CarteCategorie></CarteCategorie>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-black text-5xl font-semibold font-body capitalize">
          Les Highlanders du moment
        </h2>
        <div className="flex flex-row flex-wrap md:h-[300px]  place-content-around gap-4 p-4">
          <CarteProduit></CarteProduit>
          <CarteProduit></CarteProduit>
          <CarteProduit></CarteProduit>
          <CarteProduit></CarteProduit>
        </div>
      </section>
    </main>
  );
}
