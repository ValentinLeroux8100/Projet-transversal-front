import React from "react";
import Categorie from "services/types/categorie";
import CarteCategorie from "components/site/categorie/carteCategorie/carteCategorie";

interface ListeCategoriesProps {
  categories: Categorie[];
}

export default function ListeCategories(props: ListeCategoriesProps) {
  const categories = props.categories;

  return (
    <div className="flex flex-row flex-wrap place-content-evenly gap-4 p-4">
      {categories.map((categorie) => {
        return (
          <CarteCategorie
            image={categorie.image}
            nom={categorie.nom}
          ></CarteCategorie>
        );
      })}
    </div>
  );
}
