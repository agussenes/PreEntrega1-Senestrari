import { useState, useEffect } from "react"
import Info from "../productos.json"
import CardProduct from "./CardProduct"
import { useParams } from "react-router-dom"

const ItemListContainer = (porps) => {

    const [productos, setProductos] = useState([]) 
    const category = useParams().id
    console.log(category)



    const pedirProductos = () =>{
        return new Promise((resolve, reject)=>{
            resolve(Info)
        })
    }

    useEffect(()=>{
        pedirProductos()
            .then((res) => {
                if (category){
                    setProductos( res.filter((prod)=> prod.category === category))
                }else{
                    setProductos(res)
                }
            })
    },[category])

    return (
        <>
        
            <CardProduct   productos={productos} />

        </>
    )

}

export default ItemListContainer