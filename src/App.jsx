
import NavBar from "./componets/NavBar"
import Body from "./componets/Body"
import Footer from "./componets/footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import  CustomProvider  from "./providers/CustomProvider"

function App() {
  

  return (
    <>
      <CustomProvider>
        <BrowserRouter>
            <NavBar/>
            <Body/>
            <Footer/>
        </BrowserRouter>
      </CustomProvider>
    </>
  )
}

export default App
