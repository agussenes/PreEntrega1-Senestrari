import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const category = useParams().category;

    useEffect(() => {

      const productosRef = collection(db, "productos");
      getDocs(productosRef)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [category])
    

   

    return (
        <>
        
            <ItemList   productos={productos} />

        </>
    )

}

export default ItemListContainer