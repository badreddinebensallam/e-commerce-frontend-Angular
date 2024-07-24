import { useState } from "react"

// Un composant c'est une fonction, il doit commencer par une majiscule
function Home(props){
    return (
        <>
        <div className="container">
        <h1>Welcome to our application react</h1>
    </div>
    </>)
}
export default Home








/**import {useEffect, useState} from "react"
function Home(props){
    * définir une variable state dans un tableau qui prend le nom de la variable et un setteur
    l'initialisation de la variable state se fait dans useState(), cette valeur donnée dépend de 
    type de données stockées dans la variable *
    const [conteur,setConteur]=useState(0)
    ** la fonction useEffect permet d'exécuter un traitement après l'affichage de composant  *
    useEffect(()=>{
        setConteur(conteur+1)
    },[])// on donne un tableau pour éviter une boucle infini appelée dépendence
    return (
        <>
          <h1> valeur={conteur}</h1>
          <button onClick={(e)=>setConteur(conteur+1)}>++</button>
          <button onClick={(e)=>setConteur(conteur-1)}>--</button>
       </>
    )
} // l'objet props va contenir les propriétés qu'on doit lui passés

// On doit l'exporter pour l'appeler dans autres fichiers
export default Home
** Un composant est caractérisé par l'affichage, par des données interne s'appelent variables d'état
 * ( ou variable state) qui seront affichés dans le composant*

** Une variable state c'est une variable qui est déclarée d'une manière locale à l'intérieur d'un composant,
 * et qui stocke les données qui seront affichées par le composant lui même,
 *  une fois la variable state est changé, le composant est regénéré
   **/
  