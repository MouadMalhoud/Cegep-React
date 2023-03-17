import React from "react";
import { useNavigate } from "react-router-dom";


const NaviguerProf = (props) => {
    const naviguer = useNavigate();
    const handleNaviguerClick = () => {
      naviguer("/Professeurs");
    }

    return(
        <div>
           <br></br>
           <button className="ajouter-prof-btn" onClick={handleNaviguerClick} type="button">Vous ne trouvez pas votre enseignant ?</button>
        </div>
    );

};
export default NaviguerProf;