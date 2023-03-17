import React, { useEffect, useState } from "react";
import "../styles/Cours.css";
import { useNavigate } from "react-router-dom";
import CardCours from "../UI/CardCours.js";
import FiltreCours from "./FiltrerCours"; 


const Cours = (props) => {

  // // Filtrer session
  //  const [filteredSession, setFilteredSession] = useState('2022H');
  // const filterChangeHandler = (selectedSession) => {
  //   setFilteredSession(selectedSession);
  // };
  // const sessionFiltrees = props.items.filter((session) => {
  //   return session.date.getFullYear().toString() === filteredSession;
  // });

  // pour naviguer vers professeur (vous ne trouvez pas votre enseignant?)
  const naviguer = useNavigate();
  const handleNaviguerClick = () => {
    naviguer("/Professeurs");
  }
// get les enseignants du localStorage
  const [profs, setProfs] = useState([]);
  useEffect(() => {
    const storedProfs = getLocalStorageProf();
    setProfs(storedProfs);
  }, []);

  const getLocalStorageProf = () => {
    const storedProfs = localStorage.getItem('profs');
    return storedProfs ? JSON.parse(storedProfs) : [];
  };

  const handleChangeOption = (event) => {
  };  

  const localCours = localStorage.getItem("cours")
  const [cours, setCours] = useState(localCours ? JSON.parse(localCours) : []);
  const [professeurs, setProfesseurs] = useState([]);

  const [nouveauCours, setNouveauCours] = useState({
    titre: "",
    discipline: "",
    maxEleves: "",
    dateDebut: "",
    dateFin: "",
    professeur: "",
  });

  const saisieHandler = (e) => {
    setNouveauCours({ ...nouveauCours, [e.target.name]: e.target.value });
  };

   useEffect(()=>{
     localStorage.setItem('cours', JSON.stringify(cours))
   }, [cours])
    const handleSubmit = (e) => {
      e.preventDefault();

    setCours([...cours, { ...nouveauCours, elevesInscrits: 0 }]);

    setNouveauCours({
      titre: "",
      discipline: "",
      maxEleves: "",
      dateDebut: "",
      dateFin: "",
      professeur: "",
    });
    if (!professeurs.includes(nouveauCours.professeur)) {
        setProfesseurs([...professeurs, nouveauCours.professeur]);
    }

    
  };

  const dateDebut = new Date(nouveauCours.dateDebut);
  const dateFin = new Date(nouveauCours.dateFin);
  const debutSessionHiver = new Date(new Date().getFullYear(), 0, 1);
  const finSessionHiver = new Date(new Date().getFullYear(), 5, 6);

  if (dateDebut < debutSessionHiver || dateDebut > finSessionHiver || dateFin < debutSessionHiver  || dateFin > finSessionHiver) {
    alert("ATTENTION. Les dates des cours doivent être le 23 janvier et le 6 juin pour la session acteulle.");
    return;
  } 

  // AJOUTER CODE FILTERCOURS 
  return (
    <div className="conteneur">
      <h1 className="titre-cours">Liste des cours</h1>
      <p>Cette page vous permettera d'ajouter des cours et d'afficher leur détail.
        <br>
        </br>
        Vous pourrez également ajouter des élèves à chacun des cours.
      </p>
      <FiltreCours
      // selected={filteredSession}
      // onChangementFiltre={filterChangeHandler}
      />  
      <ul className="liste-cours">
        {cours.map((c, index) => (
          <CardCours key={index} titre={c.titre} prof={c.professeur} nbEleves={c.elevesInscrits}/>
        ))}
      </ul>
      
      <h2 className="txt-ajouter-cours">Ajouter un cours</h2>
      <div className="lbl-cours">
      <form onSubmit={handleSubmit}>
        <label>
          Titre du cours :
          <input type="text" name="titre" value={nouveauCours.titre} onChange={saisieHandler} required />
        </label>
        <br />
        <label>
          Discipline du cours:
          <input type="text" name="discipline" value={nouveauCours.discipline} onChange={saisieHandler} required />
        </label>
        <br />
        <label>
          Nombre d'élèves maximal :
          <input type="number" name="maxEleves" value={nouveauCours.maxEleves} onChange={saisieHandler} required />
        </label>
        <br />
        <label>
          Date de début du cours :
          <input type="date" name="dateDebut" value={nouveauCours.dateDebut} onChange={saisieHandler} required />
        </label>
        <br />
        <label>
          Date de fin du cours:
          <input type="date" name="dateFin" value={nouveauCours.dateFin} onChange={saisieHandler} required />
        </label>
        <br />
        <label>
          Professeur :
          <select onChange={handleChangeOption} required> 
          {profs.map((prof, index) => (
          <option key={index} value={profs.nom}>
           {index+1}. {prof.nom} {prof.prenom}
          </option> 
          ))}
         </select>
        </label>
          <div>
            <br></br>
            <button className="ajouter-prof-btn" onClick={handleNaviguerClick} type="button">Vous ne trouvez pas votre enseignant ?</button>
          </div>
        <br />
        <button type="submit">Ajouter un cours</button>
      </form>
      </div>
    </div>
  );
};

  

export default Cours;