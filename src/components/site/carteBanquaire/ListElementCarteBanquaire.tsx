import UiAirneisButton from "components/ui/form/button/button";
import React from "react";
import IconeCorbeille from "assets/images/svgs/iconeCorbeille.svg";
import CarteBanquaire from "services/types/carteBanquaire";
import { Link } from "react-router-dom";

interface ListeElementCarteBanquaireProps{
    carte: CarteBanquaire
}

export default function ListeElementCarteBanquaire(props: ListeElementCarteBanquaireProps){
    const carte = props.carte;

    return <div key={carte.nom} className="w-full flex flex-row place-content-between border-y-2 border-primary items-center">
        <div className="w-max">
            <h2 className="text-xl">{carte.nom}</h2>
            <p>**** **** **** {carte.numero.slice(12, 16)}</p>
            <p>{carte.mois}/{carte.annee}</p>
        </div>
        <div className="flex flex-row gap-2">
            <UiAirneisButton icon={IconeCorbeille} />
        </div>
    </div>
}