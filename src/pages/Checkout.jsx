
import { collection, getDocs, getFirestore } from "firebase/firestore"
import {app} from "../firebaseConfig"
import { useState, useEffect } from "react"
import ItemDetalleCompra from "../componets/ItemDetalleCompra"

const Checkout = ()=>{

    const [compras, SetCompras] = useState([])

    useEffect(()=>{
        const db = getFirestore(app)
        const comprasCollection = collection(db, "compras")
        const consulta = getDocs(comprasCollection)
        consulta
            .then((resultado)=>{
                const compras = resultado.docs.map((doc => {
                    const id = doc.id
                    const data = doc.data()
                    data.id = id
                    return data
                }))
                SetCompras(compras)
                console.log(compras)
                
                
            })

        
    }, [])

    return (
        <>

            
            <ItemDetalleCompra compras = {compras}/>
        </>
    )

}

export default Checkout