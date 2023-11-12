import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../providers/CustomProvider"
import ItemCount from "./ItemCount"


function ItemDetail(props) {


    const valorDelContexto = useContext(contexto)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
    

    const handle = (cantidadRec) => {
        setCantidadSeleccionada(cantidadRec)
    }

    const handleClick = () => {
        valorDelContexto.incrementTotal(cantidadSeleccionada)
        valorDelContexto.handleAddProduct(props.producto, cantidadSeleccionada)
        
        
    }

    if (cantidadSeleccionada > 0) {
        return (
            <div>
                <strong><h1>{props.producto.title} </h1></strong>
                <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} style={{ margin: 'auto' }} />
                <br></br>
                <p>{props.producto.description}</p>
                <br></br>
                <strong><p>Precio : ${props.producto.price}</p></strong>
                <strong><h3>Categoria: {props.producto.category}</h3></strong>
                <br></br>
                <Link to="/carrito" className="btn" onClick={handleClick}>Completar compra</Link>
            </div>
        )
    } else {
        return (
         <div style={{ textAlign: 'center' }}>
            <strong><h1>{props.producto.title} </h1></strong>
            <img className="max-w-[200px]" src={props.producto.image} alt={props.producto.title} style={{ margin: 'auto' }} />
            <br></br>
            <p>{props.producto.description}</p>
            <br></br>
            <strong><p>Precio : ${props.producto.price}</p></strong>
            <strong><h3>Categoria: {props.producto.category}</h3></strong>
            
            <br></br>
            <ItemCount stock={props.producto.stock} initial={1} onAdd={handle} />
        </div>
        )
    }
}
export default ItemDetail