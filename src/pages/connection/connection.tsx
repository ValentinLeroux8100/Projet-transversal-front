import React, { useEffect, useState } from "react";
import UiAirneisInputText from "components/ui/form/inputText/inputText";
import UiAirneisButton from "components/ui/form/button/button";
import { Link, useNavigate } from "react-router-dom";
import utilisateurService from "services/utilisateur.service";

export default function Connection() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const call = async () => {
    const token = await utilisateurService.login(email, password);
    if(token)
      navigate("/compte")
  }

  useEffect(() => {call()}, [])

  return (
    <main className="gap-8 py-8 px-12">
      <section className="flex flex-col items-center">
        <div  className="w-full sm:w-1/2 flex flex-col gap-4">
          <h2 className="titre-section">Connection</h2>
          <UiAirneisInputText
            placeholder="Jhon.doe@meuble.fr"
            label="Mail"
            onChange={setEmail}
          ></UiAirneisInputText>
          <UiAirneisInputText
            placeholder="*******"
            label="Mots de passe"
            isPassword={true}
            onChange={setPassword}
          ></UiAirneisInputText>

          <div className="w-full flex flex-col">
            <span>Pas de compte ? <Link to="../inscription" className="text-primary-700"> 
            Inscrivez-vous.
            </Link></span>
            <UiAirneisButton onClick={call}>Se connecter</UiAirneisButton>
          </div>
        </div>
      </section>
    </main>
  );
}
