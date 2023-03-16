import React, { useState } from "react";
import Card from "../UI/Card.js";
const Professeurs = (prop) => {
  const localprofs = localStorage.getItem('profs')
  const [professeurs, setProfesseurs] = useState(localprofs ? JSON.parse(localprofs) : []);

  const [nouveauProfesseur, setNouveauProfesseur] = useState({
    nom: "",
    prenom: "",
    dateEmbauche: "",
    photo: "",
    nbCours: 0,
  });

  const ChangementHandler = (e) => {
    setNouveauProfesseur({ ...nouveauProfesseur, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setProfesseurs([...professeurs, { ...nouveauProfesseur, listeCours: [] }]);
    console.log(professeurs)
    localStorage.setItem('profs', JSON.stringify(professeurs))
    setNouveauProfesseur({
      dateEmbauche: "",
      nom: "",
      prenom: "",
      photo: "",
      nbCours: 0,
    });
  };

  return (
    <div>
      <h1>Liste des professeurs</h1>
      <ul className="liste-professeur">
        {professeurs.map((p, index) => (
          <Card key={index} date={p.dateEmbauche} nom={p.nom} prenom={p.prenom} photo={p.photo}/>
        ))}
      </ul>

      <h2>Ajouter un professeur</h2>
      <form onSubmit={submitHandler}>
        <label>
          Nom :
          <input type="text" name="nom" value={nouveauProfesseur.nom} onChange={ChangementHandler} required />
        </label>
        <br />
        <label>
          Prénom :
          <input type="text" name="prenom" value={nouveauProfesseur.prenom} onChange={ChangementHandler} required />
        </label>
        <br />
        <label>
          Date d'embauche :
          <input type="date" name="dateEmbauche" value={nouveauProfesseur.dateEmbauche} onChange={ChangementHandler} required />
        </label>
        <br />
        <label>
          Photo (lien/URL) :
          <input type="text" name="photo" value={nouveauProfesseur.photo} onChange={ChangementHandler} required />
        </label>
        <br />
        <button type="submit">-Embaucher-</button>
      </form>
    </div>
  );
};


  export default Professeurs;