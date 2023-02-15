import etoileRouge from "../Assets/EtoileRouge.svg"
import etoileGrise from "../Assets/EtoileGrise.svg"
import "../Styles/Composants/Ratings.css"
// =====================================



// =====================================
function Ratings({ rating }){
  const range = [1, 2, 3, 4, 5]

    return(<div className="RatingsDiv">
             {range.map((index) => rating >= index ?
               <img className="RatingsImage" src={etoileRouge} alt="petite etoile" key={index}/> 
             :
               <img className="RatingsImage" src={etoileGrise} alt="petite etoile" key={index}/>  )}
          </div>)
}

// ==================================
export default Ratings