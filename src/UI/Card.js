import React from 'react';
import { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const localProfs = localStorage.getItem('profs');
  const [profs, setProfs] = useState(JSON.parse(localProfs));

  console.log(profs)

  return (
    <div className='card'>
         
      <img width={70} src={props.photo} alt='Erreur de chargement'/>
      <div className='card-info'>
        <h3>nom : {props.nom}</h3> 
        <h3>prenom : {props.prenom}</h3>
        <h3>date d'embauche : {props.date}</h3>
      </div>
    
   




    </div>
  );
};

export default Card;