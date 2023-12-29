import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container } from "react-bootstrap"
import Hello  from "./components/Hello"
import Footer from "./components/Footer"

function App() {



  return (
    <>
    <Container className="main text-center container-fluid">
    <Hello saludo={"my Friends with props"}/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
