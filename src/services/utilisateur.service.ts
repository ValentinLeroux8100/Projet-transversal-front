interface signupProps {
    email: string,
    motDePasse : string
    nom: string,
    prenom: string,
}

interface tokenRestRessource{
    token: string,
    expiresIn: number
}

class UtilisateurService{
    async login(email: string, motDePasse: string): Promise<string|null>{
        const token = this.getToken()
        if(token) return token;

        return await fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: new Headers({
              "Content-Type": "application/json",   
            }),
            body: JSON.stringify({
                email: email,
                motDePasse: motDePasse
            }),
        })
        .then(response => response.json())
        .then(json => {
            if(json.status == 401) return null

            this.updateToken(json);
            return json.token
        })
    }

    async signup(props: signupProps) {
        const token = this.getToken()
        if(token) return token;

        return await fetch("http://localhost:8080/api/auth/register", {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(props)
        })
        .then(async response => {
            if(response.status == 200){
                const token = await this.login(props.email, props.motDePasse);
                return token;
            }
            return null
        })
    }

    private updateToken(token :tokenRestRessource) {
        window.sessionStorage.setItem("token", token.token);
        window.sessionStorage.setItem("tokenExpiration", (token.expiresIn + Date.now()).toString());
    }

    getToken(): string|null{
        const token = window.sessionStorage.getItem("token")
        if(token){
            const tokenDuration = parseInt(window.sessionStorage.getItem("tokenExpiration"))
            if(tokenDuration > Date.now())
                return token
            else{
                window.sessionStorage.removeItem("token")
                window.sessionStorage.removeItem("tokenExpiration")
            }
        }
        return null
    }
}

export default new UtilisateurService();