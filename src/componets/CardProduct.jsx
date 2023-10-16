import { Link } from "react-router-dom"

const CardProduct = ( {productos} )=> {

    return(
        <section className="card-container">

            {
            
                 productos.length > 0 &&
                 productos.map((producto) =>{

                        return(
                
                            <article className="card">
                                <h2 className="card__title">{producto.title} - ${producto.price}</h2>
                                <img className="card__image" src={producto.image} alt={producto.title} />
                                <br></br>
                                <Link to={`/detalle/${producto.id}`}>
                                <button  className="btn" >ver mas</button>
                                </Link>
                                
                                
                            </article>

                        )

             })
            }
        
        </section>
    )

}
export default CardProduct 