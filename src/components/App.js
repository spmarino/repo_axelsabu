import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import MiCustomProvider from "./CartContext"

const App = () => {
  
    return (
        <>
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
            <MiCustomProvider/>
            <ToastContainer/>
        </BrowserRouter>
            
        </>
    )
}

export default App;