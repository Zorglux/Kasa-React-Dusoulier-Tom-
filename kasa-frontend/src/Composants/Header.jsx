import logoHeader from "../Assets/LogoHeader.svg"
import { Link } from "react-router-dom"
import "../Styles/Composants/Header.css"

// ==========================================
function Header(){
    return(
        <header className="Header">
            <img className="HeaderImage" src={logoHeader} alt="lettres K a s a avec une maison a la place du premier A" />
            <nav className="HeaderNav">
                <Link className="HeaderLien Accueil" to="/" >Accueil</Link>
                <Link className="HeaderLien" to="/propos">A Propos</Link>
            </nav>
        </header>
    )
}

// ==========================================
export default Header