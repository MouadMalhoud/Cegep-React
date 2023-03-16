import React from 'react';
import { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const localprofs = localStorage.getItem(props.key);
  const [profs, setProfs] = useState(JSON.parse(localprofs));

  console.log(profs)

  return (
    <div className='card'>
         
      <img width={70} src={props.photo} alt='Erreur de chargement'/>
      <div className='card-info'>
        <h3>nom : {props.nom}</h3> 
        <h3>prenom : {props.prenom}</h3>
        date d'embauche : {props.dateEmbauche}
      </div>
    
   




    </div>
  );
};

export default Card;