import "App.css";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Acceuil from "pages/acceuil/acceuil";
import Navbar from "layouts/navbar/navbar";
import Footer from "layouts/footer/footer";
import Produit from "pages/produit/produit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },
  {
    path: "produits/:produitId",
    element: <Produit />,
  },
]);

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="App">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
