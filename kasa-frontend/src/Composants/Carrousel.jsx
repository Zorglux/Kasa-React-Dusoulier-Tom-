import { useState } from "react"
import "../Styles/Composants/Carrousel.css"
import fleche from "../Assets/FlecheCarrousel.png"


//=======================================



// ========================================
function Carrousel({ images }){
 const [numeroImage, setNumeroImage] = useState(0)
 const nombreImagesTotal = images.length 
 const uneSeuleImage = images.length === 1 ? true : false 
    
  const imagePrecedente = () => {
   const premiereImage = numeroImage === 0 
   const nouveauNumeroImage = premiereImage ? nombreImagesTotal -1 : numeroImage -1
   setNumeroImage(nouveauNumeroImage)
  }

  const imageSuivante = () => {
    const imageFinale = numeroImage === nombreImagesTotal-1
    const prochaineImage = imageFinale ? 0 : numeroImage+1 
    setNumeroImage(prochaineImage)
}

    return ( uneSeuleImage ? ( <div className="Carrousel-div">                               
                                <img src={images[numeroImage]} alt="pièce de l'appartement" className="Carrousel-image" />
                               </div>) 
                               :
                             (<div className="Carrousel-div">
                                 <img src={fleche} alt="petite flèche" className="Carrousel-fleche-gauche" onClick={imageSuivante}/>
                                 <img src={fleche} alt="petite flèche" className="Carrousel-fleche-droite" onClick={imagePrecedente}/>
                                 <p className="Carrousel-chiffrage">{numeroImage+1}/{nombreImagesTotal}</p>
                                 <img src={images[numeroImage]} alt="pièce de l'appartement" className="Carrousel-image" key={images[numeroImage]}/>
                             </div>))
}

// ======================================
export default Carrousel 