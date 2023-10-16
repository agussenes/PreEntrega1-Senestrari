
import NavBar from "./componets/NavBar"
import Body from "./componets/Body"
import Footer from "./componets/footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <BrowserRouter>
       <NavBar nombre="Checho" edad={24}/>

       <Body/>

       <Footer/>
    </BrowserRouter>
  )
}

export default App
