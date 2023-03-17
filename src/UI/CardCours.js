import React from 'react';
import { useState } from 'react';
import "../UI/Card.css";

const CardCours = (props) => {
  const localCours = localStorage.getItem('cours');
  const [cours, setCours] = useState(JSON.parse(localCours));

  return (
    <div className='card'>
         
      <div className='card-info'>
        <h3>Nom Cours : {props.titre}</h3> 
        <h3>Nombre Étudiant : {props.nbEleves}</h3>
      </div>

    </div>
  );
};

export default CardCours;