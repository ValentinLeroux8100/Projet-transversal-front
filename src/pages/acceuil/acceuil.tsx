import React from "react";
import CarteProduit from "components/site/carteProduit/carteProduit";
import CarteCategorie from "components/site/carteCategorie/carteCategorie";

export default function Acceuil() {
  return (
    <main className="flex flex-col gap-8 py-8 px-12">
      <section className="flex flex-col gap-8 ">
        <div className="flex flex-row flex-wrap place-content-evenly gap-4 p-4">
          <CarteCategorie
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            nom="test"
          ></CarteCategorie>
          <CarteCategorie
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            nom="test"
          ></CarteCategorie>
          <CarteCategorie
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            nom="test"
          ></CarteCategorie>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-black text-5xl font-semibold font-body capitalize">
          Les Highlanders du moment
        </h2>
        <div className="flex flex-row flex-wrap   place-content-around gap-4 p-4">
          <CarteProduit
            nom="Commode"
            description="pas très commode"
            prix="100"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          ></CarteProduit>
          <CarteProduit
            nom="Commode"
            description="pas très commode"
            prix="100"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          ></CarteProduit>
          <CarteProduit
            nom="Commode"
            description="pas très commode"
            prix="100"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          ></CarteProduit>
          <CarteProduit
            nom="Commode"
            description="pas très commode"
            prix="100"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          ></CarteProduit>
        </div>
      </section>
    </main>
  );
}
