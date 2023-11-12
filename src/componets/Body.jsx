import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import Carrito from "../pages/Carrito"
import Checkout from "../pages/Checkout"


const Body = (props) => {

   

    return (
        <main className="main">
            <Routes>

                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/carrito" element={<Carrito/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="*" element={<p>404 vuelva a intentar por favor</p>} />
                

            </Routes>
         
        
        </main>
        
    )
}

export default Body