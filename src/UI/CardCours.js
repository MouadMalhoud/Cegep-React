import React from 'react';
import { useState } from 'react';
import './Card.css';

const CardCours = (props) => {
  const localCours = localStorage.getItem('cours');
  const [cours, setCours] = useState(JSON.parse(localCours));

  console.log(cours)

  return (
    <div className='card-cours'>
         
      <div className='card-info'>
        <h3>Nom Cours : {props.nom}</h3> 
        <h3>Nombre Étudiant : {props.prenom}</h3>
      </div>

    </div>
  );
};

export default CardCours;