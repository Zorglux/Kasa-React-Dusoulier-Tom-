import { Link } from "react-router-dom"
import "../Styles/Composants/Cartes.css"

// ====================================
function Cartes({ cover, title, id}){

    return(<Link className="CartesLien" to={"logement/"+id}>
             <img className="CartesImage" src={cover} alt="présentation de la location"/>
             <h2 className="CartesTitre">{title}</h2>
          </Link>)
}



// =====================================
export default Cartes