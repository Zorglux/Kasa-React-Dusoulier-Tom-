import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

import "../Styles/Pages/Logement.css"
import Tags from "../Composants/Tags"
import Ratings from "../Composants/Ratings"
import Collapseur from "../Composants/Collapseur"
import Carrousel from "../Composants/Carrousel"
import Loader from "../Composants/Loader"
// ===================================

function Logement(){
   
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)    
   // ==================================================
    function loader(){
        return (<Loader/>)
     }

    function main(){
        return  (<React.Fragment>
                  <main className="LogementMain">
                   <Carrousel images={data.pictures}/>
                  </main>
    
                  <article>
                   <div className="LogementInfos">
                    <section>
                     <h2 className="LogementTitre">{data.title}</h2>
                     <p className="LogementLocation">{data.location}</p>
                      <div className="LogementTags">
                       {data.tags.map((logementTag) => 
                          <Tags 
                          titre={logementTag}
                          key={logementTag}/>  )}
                      </div>
                    </section>
                    <aside className="LogementAside">
                      <div className="LogementHoteDiv">
                       <h3 className="LogementHote">{data.host.name}</h3>
                       <img className="LogementHoteImage" src={data.host.picture} alt="Visage de l'hote"/>
                      </div>
                     <Ratings rating={data.rating}/>
                    </aside>
                   </div>
                   <div className="LogementCollapseur">
                    <Collapseur titre="Description" texte={data.description} page="Logement" />
                    <Collapseur titre="Équipements" texte={data.equipments}  page="Logement" />
                   </div>
                  </article>
                </React.Fragment>)
      }

// ===============================================================================================
    useEffect(() => {
        fetch('/KasaData.json')
        .then((response) => response.json())
        .then((datas) => {
            const filtre = datas.filter((donnee) => donnee.id === id )
            if(filtre.length === 0){
              return navigate("/*")
            }
            setData(datas.find((donnee) => donnee.id === id )) 
            setIsLoading(false)
        })
        .catch((error) => console.log(error))
    })
// =====================================================================================
     
  if(isLoading) {return loader()} else {return main()}   
}

// ====================================
export default Logement