import { Link } from "react-router-dom"

function Item(props) {
    return (
      <section className="card-container">
        {props.productos.map((producto) => {
          return (
            <article className="card">
            <h2 className="card__title">{producto.title} - ${producto.price}</h2>
            <img className="card__image" src={producto.image} alt={producto.title} />
            <br></br>
            <Link to={`/item/${producto.id}`}>
            <button  className="btn" >ver mas</button>
            </Link>
            
            
        </article>
          )
        })}
      </section>
    )
  }
  export default Item