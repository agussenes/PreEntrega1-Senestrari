import CartWidGet from "./CartWidGet"
import { Link, NavLink } from "react-router-dom"
const NavBar = (props) => {

    
    return (
        <>
         <header className="header">
            <Link to="/">
            <h1> <strong>Bienvenid@ a ChechMark  {props.nombre}</strong></h1>
            </Link>
         
            <nav className="navbar">
                <NavLink to="/">Catalogo</NavLink>
                <NavLink to="/category/clothing">Ropa</NavLink>
                <NavLink to="/category/jewelery">Joyas</NavLink>
                <NavLink to="/category/electronics">Electronicos</NavLink>
                <NavLink to="/carrito">Carrito</NavLink>
                <Link to="/carrito"><CartWidGet/></Link>
               
                
               
            </nav>
         
          
        </header>
      
        </>
    )
       
}

export default NavBar