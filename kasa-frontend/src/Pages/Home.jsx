 import React from "react"
 import { useEffect } from "react"
 import { useState } from "react"

 import "../Styles/Pages/Home.css"
 import Cartes from "../Composants/Cartes"
 import Banner from "../Composants/Banner"
 import Loader from "../Composants/Loader"
// ==============================

function Home(){
const [dataLogement, setDataLogement] = useState([])
const [isLoading, setIsLoading ] = useState(true)

 useEffect(() => {
  fetch('KasaData.json')
  .then((response) => response.json())
  .then((datas) => {
     setDataLogement(datas)
     setIsLoading(false)
  })
  .catch((error) => console.log(error))
 }, [])
// =========================================
 function Main(){
 return(<React.Fragment>
         <Banner page="Home" />
          <main className="HomeMain">

            {dataLogement.map((logement) => 
            <Cartes
            key={logement.id}
            cover={logement.cover} 
            title={logement.title}
            id={logement.id}/> )}
      
          </main>
        </React.Fragment>)
 }
// =========================================================
 return( isLoading ?  (<Loader/>)  : Main()  )  
}

// ==============================
export default Home