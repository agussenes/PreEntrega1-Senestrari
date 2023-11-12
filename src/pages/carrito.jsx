import { addDoc, collection, getFirestore, serverTimestamp, getDocs } from "firebase/firestore"
import { useContext, useState } from "react"
import { toast } from "sonner"
import { app } from "../firebaseConfig"
import { contexto } from "../providers/CustomProvider"
import { Link } from "react-router-dom"

const Carrito = () => {

    const valorDelContexto = useContext(contexto)
   

    

    const handleFinalizarCompra = () => {
        //tendria que ya tener a mano lo siguiente : 
        //el array de productos "carrito" que este guardado en el contexto
        //info de un usuario
        //fecha de compra
        const compra = {
            carrito: [{id: "1", cantidad: 1, precio: 1000}],
            usuario: {nombre: "checho"},
            created_at: serverTimestamp(),
            
           
        }
       
        const db = getFirestore(app)
        const comprasCollection = collection(db, "compras")
        const consulta = addDoc(comprasCollection, compra)
     
      

        consulta
            .then((resultado)=>{
                console.log(resultado.id)
            })
            .catch((err) => {
            
                toast.error("Ocurrio un error al guardar la compra")
            })

    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-8">Carrito</h2>
            <br></br>
            <strong><p>Nombre:</p></strong>
            <input></input>
            <br></br>
            <strong><p>Email (enviar la facuta):</p></strong>
            <input></input>
            <br></br>
            <strong><p>Numero de Celular:</p></strong>
            <input></input>
            <br></br>
            <br></br>

           
            <Link to="/checkout" onClick={handleFinalizarCompra} className="btn">finalizar compra</Link>
          
        </div>
    )
}
export default Carrito