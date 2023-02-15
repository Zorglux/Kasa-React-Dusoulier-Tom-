import "../Styles/Composants/Banner.css"

// ===============================
function Banner({ page }){
 const BanniereType = page === "Propos" ? true : false
   return (BanniereType ?
                 (<div className={page+"-image"}>
                  </div>)
                 : 
                  (<div className={page+"-image"}>
                      <h1 className={page+"-texte"}>Chez vous, partout et ailleurs</h1>
                  </div>))
}

// =================================


export default Banner