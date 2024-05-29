import "App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "layouts/layout";
import Acceuil from "pages/acceuil/acceuil";
import Produit from "pages/produit/produit";
import Categorie from "pages/categorie/categorie";
import Panier from "pages/panier/panier";
import Inscription from "pages/inscription/inscription";
import Checkout from "pages/checkout/checkout";
import Connection from "pages/connection/connection";
import AjoutAdresse from "pages/adresse/ajoutAdresse/ajoutAdresse";
import AjoutCarteBanquaire from "pages/ajoutCarteBanquaire/ajoutCarteBanquaire";
import Adresse from "pages/adresse/adresse";
import ModificationAdresse from "pages/adresse/modificationAdresse/modificationAdresse";

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
      {
        path: "inscription",
        element: <Inscription />,
      },
      {
        path: "connection",
        element: <Connection />
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "adresse",
        children: [{
          index: true,
          element: <Adresse />,
        },
        {
          path: "ajout",
          element: <AjoutAdresse />
        },
        {
          path: "modification",
          element: <ModificationAdresse />
        }]
      },
      {
        path: "carte",
        children: [{
          path: "ajout",
          element: <AjoutCarteBanquaire />
        }]
      }
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
