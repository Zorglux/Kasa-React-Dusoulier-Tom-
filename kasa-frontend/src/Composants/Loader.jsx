import "../Styles/Composants/Loader.css"
import logo from "../Assets/LogoHeader.svg"
// ===================================
function Loader(){
    return (<div className="Loader-logement">
             <img className="Loader-logo" src={logo} alt="Lettres K - A - S - A, une maison à la place du premier a"/>
           </div>)
}


// ==================================
export default Loader