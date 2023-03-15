import React from "react";
import logo from "../assets/logo.png";
import '../styles/Accueil.css'
function Accueil(){
    return(
        <div className="conteneur">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="titre-accueil">Bienvenue au Cegep Montmorency de Laval!</h1>
            <h3 className="desc-base-accueil">Ceci est le site de gestion des cours et d'inscription de Montmorency.</h3>
            <div className="desc-detaille-accueil">
                <h4>Vous pourrez : </h4>
                <ul>
                    <li>Voir la liste des enseignants actuels au cegep</li>
                    <li>Voir la liste des cours données au cegep durant cette session (ainsi que les 4 sessions précedentes)</li>
                    <li>Ajouter des cours et des enseignants</li>
                    <li>Une page individuelle pour chaque cours afin d'inscrire des élèves au cours</li>
                </ul>
            </div>
            <br/>
            <hr className="separatrice-accueil"/>
            <br/>
            <p>Ne vous inquiétez pas, des détails seront disponible pour chaque page ainsi qu'un menu pour vous aider dans votre navigation!</p>
        </div>
    );
}

export default Accueil