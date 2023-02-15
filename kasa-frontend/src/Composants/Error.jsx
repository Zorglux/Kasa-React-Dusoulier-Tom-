import { Link } from "react-router-dom"
import "../Styles/Composants/Error.css"
// ==========================================

function Error(){
    return(<main className="ErrorMain">
            <h1 className="ErrorH1">404</h1>
            <p className="ErrorP">Oups! La page que vous demandez n'existe pas.</p>
             <Link to="/" className="ErrorLink">Retourner sur la page d'accueil</Link>
          </main>)
}

// ==========================================
export default Error