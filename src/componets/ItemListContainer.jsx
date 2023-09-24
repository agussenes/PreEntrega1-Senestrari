

const ItemListContainer = (porps) => {

    const nombre = "Checho"
    const edad = 24

    return (
        <>
        
            <main className="main">
              <h1><strong>Bienvenido a la mejor Tienda Online</strong></h1>
              <p>Bienvenido {nombre}!</p>
              <p>Tenes {edad} años!</p>
              <div className="imagenConfg"><img  src="./src/imagenes/amazonfba.png" ></img></div>
              <p><strong>{nombre}</strong>, aca vas a encontar toda la informacion sobre AmazonFBA y ademas encontraras productos de afiliados y en ofertas!</p>
              
              

             </main>

        </>
    )

}

export default ItemListContainer