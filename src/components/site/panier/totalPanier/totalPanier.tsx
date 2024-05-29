import React from "react";
import UiAirneisButton from "components/ui/form/button/button";
import { Link } from "react-router-dom";

export default function TotalPanier() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <div className="flex flex-row justify-between font-bold text-xl">
          <h2>Total</h2>
          <h2>1000€</h2>
        </div>
        <div className="flex flex-row justify-between text-lg">
          <h3>TVA</h3>
          <h3>200€</h3>
        </div>
      </div>
      <Link to="/checkout">
        <UiAirneisButton className="w-full">Passer la commande</UiAirneisButton>
      </Link>
    </div>
  );
}
