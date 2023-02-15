import React from "react"
import "../Styles/Composants/Tags.css"
// =============================================

function Tags({ titre }){
    return(<React.Fragment>
             <p className="TagsTexte">{titre}</p>
           </React.Fragment>)
}


// ===========================================
export default Tags