import { useNavigate, useParams, } from "react-router-dom"
import { useEffect, useState } from "react"
import  ItemDetail from "../componets/ItemDetail"
import { toast } from "sonner"
import { app } from "../firebaseConfig"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"



function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const [notFound, setNotFound] = useState(true)
    const navigate = useNavigate()
    const params = useParams()

    
    useEffect(()=>{
       
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const docRef = doc(productosCollection,params.id)
        const consulta = getDoc(docRef)

        consulta
            .then((resultado) =>{
                const producto = resultado.data()
                setProducto(producto)
                setNotFound(false)
            })
            .catch((err)=>{
                toast.error("Error al cargar el productos")
            })
            .finally(()=>{
                setLoading(false)
                toast.dismiss()
            })

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
            
            <ItemDetail producto={producto} />

        </div>
    )
}
export default ItemDetailContainer