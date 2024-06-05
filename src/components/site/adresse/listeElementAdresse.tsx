import UiAirneisButton from "components/ui/form/button/button";
import React from "react";
import IconeCorbeille from "assets/images/svgs/iconeCorbeille.svg";
import IconeEdit from "assets/images/svgs/iconeEdit.svg";
import Adresse from "services/types/adresse";
import adresseService from "services/adresse.service";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

interface ListeElementAdresseProps{
    adresse: Adresse
}

export default function ListeElementAdresse(props: ListeElementAdresseProps){
    const adresse = props.adresse;
    
    const handleDelete = () => {
        adresseService.delete(adresse).then(
            result => {
                if(result.status == 200) 
                    window.location.reload();
            }
        )
    }

    return <div className="w-full flex flex-row place-content-between border-y-2 border-primary items-center" key={adresse.informations}>
        <div className="w-max">
            <h2 className="text-xl">{adresse.numeroDeRue} {adresse.informations}</h2>
            <p>{adresse.codePostal} {adresse.ville} </p>
        </div>
        <div className="flex flex-row gap-2">
            <UiAirneisButton icon={IconeCorbeille} onClick={handleDelete} />
        </div>
    </div>
}