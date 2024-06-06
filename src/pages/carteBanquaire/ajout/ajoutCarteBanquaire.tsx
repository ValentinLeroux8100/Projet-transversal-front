import React, { useState, useEffect } from "react";
import UiAirneisButton from "components/ui/form/button/button";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import { useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";
import CarteBanquaireService from "services/carteBanquaire.service";
import CarteBanquaire from "services/types/carteBanquaire";

export default function AjoutCarteBanquaire() {
    const navigate = useNavigate();
    const [carte, setCarte] = useState(new CarteBanquaire());
    const [error, setError] = useState(null);

    useEffect(() => {
        if (utilisateurService.getToken() == null) {
            navigate("/connection");
        }
    }, [navigate]);

    const handleInputChange = (name, value) => {
        setCarte(prevState => ({
            ...prevState,
            [name]: name === 'mois' || name === 'annee' || name === 'ccv' ? parseInt(value) : value
        }));
    };

    const ajouterUneCarte = async (e) => {
        e.preventDefault();
        try {
            await CarteBanquaireService.add(carte);
            navigate('/success'); // Rediriger vers une page de succès ou autre
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
                        value={carte.numero}
                        onChange={(e) => handleInputChange("numero", e.target.value)}
                    />
                    <div className="flex flex-row gap-4">
                        <UiAirneisInputText
                            name="mois"
                            placeholder="10"
                            label="Mois"
                            required={true}
                            value={carte.mois.toString()}
                            onChange={(e) => handleInputChange("mois", e.target.value)}
                        />
                        <UiAirneisInputText
                            name="annee"
                            placeholder="11"
                            label="Année"
                            required={true}
                            value={carte.annee}
                            onChange={(e) => handleInputChange("annee", e.target.value)}
                        />
                    </div>
                    <div className="w-14">
                        <UiAirneisInputText
                            name="ccv"
                            placeholder="123"
                            label="CVV"
                            required={true}
                            pattern="\d{3}"
                            value={carte.ccv}
                            onChange={(e) => handleInputChange("ccv", e.target.value)}
                        />
                    </div>
                    <UiAirneisInputText
                        name="nom"
                        placeholder="John Doe"
                        label="Nom de carte"
                        required={true}
                        value={carte.nom}
                        onChange={(e) => handleInputChange("nom", e.target.value)}
                    />
                    <UiAirneisButton type="submit">Ajouter</UiAirneisButton>
                </form>
            </section>
        </main>
    );
}
