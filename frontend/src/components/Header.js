import { NavLink } from "react-router-dom"

function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}> Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}> Produits</NavLink>
                </li>
                <li>
                    <NavLink to={"/products/add"}> Ajouter produit</NavLink>
                </li>
                <li>
                    <NavLink to={"/products/edit/:id"}> Editer produit</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}
export default Header
// Le composant NavLink est fourni par le package react-router-dom 
// NavLink est utilisé juste dans la barre de navigation 