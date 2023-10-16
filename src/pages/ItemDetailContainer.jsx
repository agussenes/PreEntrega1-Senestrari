import { Link, useNavigate, useParams, } from "react-router-dom"
import productos from "../productos.json"
import { useEffect, useState } from "react"


function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
       
        setTimeout(() => {
            setLoading(false)
           
            productos.forEach(producto=>{
               
                if(producto.id === parseInt(params.id)) {
        
                    setNotFound(false)
                    setProducto(producto)
                } 

            })
        }, 1000);

    },[])    


    useEffect(()=>{
        if(notFound && !loading) {
            navigate("/404")
        }
    },[notFound,loading])


    if(loading) {
        return <p>Cargando...</p>
    }

  

    return (
        <div>
            
            <article className="card">
            <h1 className="card__title">{producto.title}</h1>
            <img className="card__image" src={producto.image} alt={producto.title} />
            <br></br>
            <strong><h2>Precio: ${producto.price}</h2></strong>
            <Link to={`/category/${producto.category}`}>
               <h3>Categoria: {producto.category}</h3>
            </Link>
            
            <button  className="btn" >Añadir al carrito</button>
            <br></br>
            <br></br>

            <Link to={`/`}>
            <button className="btn2"> volver</button>
            </Link>            
            </article>
        </div>
    )
}
export default ItemDetailContainer