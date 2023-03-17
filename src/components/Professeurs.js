import React, { useState, useEffect } from "react";
import Card from "../UI/Card.js";
import "../styles/Professeur.css";

const Professeurs = (prop) => {
  let localCours = localStorage.getItem('cours')
  let liCours = JSON.parse(localCours)
  const localProfs = localStorage.getItem('profs')
  const [professeurs, setProfesseurs] = useState(localProfs ? JSON.parse(localProfs) : []);

  const [nouveauProfesseur, setNouveauProfesseur] = useState({
    nom: "",
    prenom: "",
    dateEmbauche: "",
    photo: "",
    nbCours: [],
  });

  
  const ChangementHandler = (e) => {
    setNouveauProfesseur({ ...nouveauProfesseur, [e.target.name]: e.target.value });
  };

  useEffect(() =>{
    localStorage.setItem('profs', JSON.stringify(professeurs))

  }, [professeurs])

  const submitHandler = (e) => {
    e.preventDefault();

    setProfesseurs([...professeurs, { ...nouveauProfesseur, listeCours: [] }]);
    
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
      <p>Cette page vous permettra d'ajouter ou de voir la liste des professeurs disponibles.</p>
      <ul className="liste-professeur">
        {/* Données brute pour test*/}
      <Card key='1' date='2022-02-12' nom='Elbend' prenom='Tremblay' photo='https://img2.cdn.showbizz.net/1582127195-Salvail.jpg/1115/670/'/>
      <Card key='2' date='2022-02-13' nom='Mouad' prenom='Malhoud' photo='https://media.wired.com/photos/62b4fa14d5db4b03db8b1d3c/125:94/w_2124,h_1597,c_limit/Changpeng-Zhao-Binance-Q&A-Business-1241340179.jpg'/>
      <Card key='3' date='2022-02-14' nom='Simon' prenom='Delisle' photo='https://i1.sndcdn.com/avatars-XpzN0ujJa3iI96PS-hKizHQ-t500x500.jpg'/>

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
          <input className="type-url" type="text" name="photo" value={nouveauProfesseur.photo} onChange={ChangementHandler} required />
        </label>
        <br />
        <button type="submit">Embaucher</button>
      </form>
    </div>
  );
};


  export default Professeurs;