import React from 'react';
import { useState } from 'react';
import "../UI/Card.css";

const CardCours = (props) => {
  const localCours = localStorage.getItem('cours');
  const [cours, setCours] = useState(JSON.parse(localCours));
  const [modalIsActive, setModal] = useState(false);

  function modalState(){
    if(modalIsActive === true){
      setModal(false)
    }else{
      setModal(true)
    }
  }

  return (
    <div className='card'>
         
      <div className='card-info'>
        <h3>Cours : {props.titre}</h3> 
        <h3>Étudiants : {props.nbEleves}</h3>
      </div>
    <button className="btn-info" onClick={modalState}>
        Plus d'informations ...
    </button>

    </div>
  );
};

export default CardCours;