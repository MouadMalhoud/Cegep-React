import './Modal.css'


function Modal(props){
    

    return(
        <div className="modal dropshadow">
        <h3>Ajouter un étudiant à ce cours</h3>
             <form>
                <label>Nom:</label>
                <input type="text" required />
                <label>Prénom:</label>
                <input type="text" required/>
                <label>Numéro d'admission:</label>
                <input type="number" required/>
                <div>
                    <button onClick={props.onClick}>Confirmer</button>
                    <button onClick={props.onClick}>Fermer</button>
                </div>
            </form>

            
        </div>
    )



}

export default Modal;