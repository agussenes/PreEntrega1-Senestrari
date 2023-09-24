import CartWidGet from "./CartWidGet"
const NavBar = (props) => {

    
    return (
        <>
         <header className="header">
         <h1> <strong>Bienvenid@ {props.nombre}</strong></h1>
            <nav className="navbar">
                <a href="#">Quienes  Somos</a>
                <a href="#">Comprar</a>
                <a href="#">Ofertas</a>
                <a href="#"><CartWidGet/></a>
                {/* <a href="#"><strong>(0)</strong></a> */}
                
               
            </nav>
         
          
        </header>
      
        </>
    )
       
}

export default NavBar