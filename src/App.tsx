import "App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "layouts/layout";
import Acceuil from "pages/acceuil/acceuil";
import Produit from "pages/produit/produit";
import Categorie from "pages/categorie/categorie";
import Panier from "pages/panier/panier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Acceuil />,
      },
      {
        path: "produits/:produitId",
        element: <Produit />,
      },
      {
        path: "categories/:categoriesName",
        element: <Categorie />,
      },
      {
        path: "panier",
        element: <Panier />,
      },
    ],
  },
]);

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
