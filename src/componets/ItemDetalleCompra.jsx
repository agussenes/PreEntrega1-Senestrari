import { Link } from "react-router-dom"

function ItemDetalleCompra(props) {
    return (
      <section className="card-container">
        <strong><h1>Muchas graciasa por ser cliente!</h1></strong>
        <strong><h1> TUS COMPRAS</h1></strong>
        
        <Link to="/" className="btn" >vovler a todos los productos</Link>
        {props.compras.map((compra) => {
          return (
            <>
            <h1><strong>Codigo de compra:</strong> {compra.id}</h1>
           
            </>
          )
        })}
      </section>
    )
  }
  export default ItemDetalleCompra