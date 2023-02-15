import logoFooter from "../Assets/logoFooter.svg"
import "../Styles/Composants/Footer.css"

// ========================================
function Footer(){
    return(
       <footer className="Footer">
         <img className="FooterImage" src={logoFooter} alt="lettres K a s a avec une maison a la place du premier A" />
         <p className="FooterTexte">© 2020 Kasa. All rights reserved</p>
       </footer>
        )
}

// ==========================================
export default Footer