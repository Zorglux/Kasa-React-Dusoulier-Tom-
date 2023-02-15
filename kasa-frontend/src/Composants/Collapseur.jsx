import { useState } from "react"
import "../Styles/Composants/Collapseur.css"
import fleche from "../Assets/FlecheBas.svg"

// ==================================
function Collapseur({ titre, texte, page}){

 const [ouverture, setOuverture] = useState(false)
 const texteEquipement = titre === "Équipements" ? true : false

 function Ferme(){
  return (<article className={page+"-article"}>
            <h3 className={page+"-titre"}>{titre}</h3>
            <img className={page+"-img"} src={fleche} alt="petite flèche" onClick={() => setOuverture(true)} />
         </article>)
 }

 function Ouvert(){
  return (<article>
           <div className={page+"-div"}>
            <h3 className={page+"-titre"}>{titre}</h3>
            <img className={page+"-img2"} src={fleche} alt="petite flèche" onClick={() => setOuverture(false)} />   
           </div>
           <div className={page+"-div-placement-texte"}> 
            {texteEquipement ? (     
              texte.map((equipement) => 
             <p className={page+"-texte-equipement"} key={equipement}>{equipement}</p>)) 
            :
             <p className={page+"-texte"}>{texte}</p>} 
           </div>
         </article>)
 }

// ===================================================== 
return ( ouverture ? Ouvert() : Ferme() )
}

// =================================
export default Collapseur