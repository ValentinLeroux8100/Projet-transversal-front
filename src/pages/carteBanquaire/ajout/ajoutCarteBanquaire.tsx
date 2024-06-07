import React, { useState, useEffect } from "react";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import { useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";
import CarteBanquaireService from "services/carteBanquaire.service";
import CarteBanquaire from "services/types/carteBanquaire";
import carteBanquaireService from "services/carteBanquaire.service";
import { carteBanquaireToCarteBanquaireRest } from "services/mapper/carteBanquaireMapper";

export default function AjoutCarteBanquaire() {
    const navigate = useNavigate();

    const [numero, setNunero] = useState("")
    const [mois, setMois] = useState("")
    const [annee, setAnnee] = useState("")
    const [ccv, setCcv] = useState("")
    const [nom, setNom] = useState("")
    
    const [cartes, setCartes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (utilisateurService.getToken() == null) {
            navigate("/connection");
        }else{
            carteBanquaireService.get()
                .then((cartesBanquaires) => setCartes(cartesBanquaires))
        }
    }, [navigate]);

    const ajouterUneCarte = async (e) => {
        e.preventDefault();
        try {
            const carteAInserer = new CarteBanquaire();
            carteAInserer.annee = parseInt(annee)
            carteAInserer.mois = parseInt(mois)
            carteAInserer.ccv = parseInt(ccv)
            carteAInserer.numero = numero
            carteAInserer.nom = nom
            await CarteBanquaireService.add([
                ...cartes.map(carteEnBase => {
                    carteEnBase.codeSecurite = parseInt(carteEnBase.codeSecurite)
                    return carteEnBase
                }), 
                carteBanquaireToCarteBanquaireRest(carteAInserer)
            ]).then(result => {
                if(result.status == 200)
                    navigate("/compte/carteBanquaire")
            });
        } catch (error) {
            setError("Erreur lors de l'ajout de la carte bancaire.");
        }
    };

    return (
        <main className="gap-8 py-8 px-12">
            <section className="flex flex-col items-center">
                <form className="w-full sm:w-1/2 flex flex-col gap-4" onSubmit={ajouterUneCarte}>
                    <h2 className="titre-section">Ajout Carte</h2>
                    {error && <p className="error-message">{error}</p>}
                    <UiAirneisInputText
                        name="numero"
                        placeholder="**** **** **** 1234"
                        label="Numéro de carte"
                        required={true}
                        pattern="\d{16}"
                        onChange={setNunero}
                    />
                    <div className="flex flex-row gap-4">
                        <UiAirneisInputText
                            name="mois"
                            placeholder="10"
                            label="Mois"
                            required={true}
                            onChange={setMois}
                        />
                        <UiAirneisInputText
                            name="annee"
                            placeholder="11"
                            label="Année"
                            required={true}
                            onChange={setAnnee}
                        />
                    </div>
                    <div className="w-14">
                        <UiAirneisInputText
                            name="ccv"
                            placeholder="123"
                            label="CVV"
                            required={true}
                            pattern="\d{3}"
                            onChange={setCcv}
                        />
                    </div>
                    <UiAirneisInputText
                        name="nom"
                        placeholder="John Doe"
                        label="Nom de carte"
                        required={true}
                        onChange={setNom}
                    />
                    <UiAirneisButton>Ajouter</UiAirneisButton>
                </form>
            </section>
        </main>
    );
}
