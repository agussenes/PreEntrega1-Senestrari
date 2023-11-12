import CartWidGet from "./CartWidGet"
import { Link, NavLink } from "react-router-dom"
import {contexto} from "../providers/CustomProvider"
import {useContext} from "react"


const NavBar = () => {

    const valorDelContexto = useContext(contexto)
    
    return (
        
         <header className="header">
            <Link to="/">
            <h1> <strong>Bienvenido a ChechMark</strong></h1>
            </Link>
         
            <nav className="navbar">
                <NavLink to="/">Catalogo</NavLink>
                <NavLink to="/category/clothing">Ropa</NavLink>
                <NavLink to="/category/jewelery">Joyas</NavLink>
                <NavLink to="/category/electronics">Electronicos</NavLink>
                <NavLink to="/carrito">Carrito</NavLink>
                <Link to="/carrito"><CartWidGet/></Link>
               {valorDelContexto.cantidadTotal}
               
                
               
            </nav>
         
          
        </header>
      
        
    )
       
}

export default NavBar