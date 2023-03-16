import React from 'react';

import './FiltrerCours.css';

const FiltreCours = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='filtre-annee'>
      <div className='filtre-annee_controle'>
        <label>Filtrer par session (automne/hiver)</label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='2023H'>Hiver 2023</option>
          <option value='2023A'>Automne 2023</option>
          <option value='2022A'>Hiver 2022</option>
          <option value='2022H'>Automne 2022</option>
        </select>
      </div>
    </div>
  );
};

export default FiltreCours;
