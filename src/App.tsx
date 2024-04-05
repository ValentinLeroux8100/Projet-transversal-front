import "App.css";
import React from "react";
import Navbar from "layouts/navbar/navbar";
import Footer from "layouts/footer/footer";
import Acceuil from "pages/acceuil/acceuil";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="App">
        <Acceuil></Acceuil>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
