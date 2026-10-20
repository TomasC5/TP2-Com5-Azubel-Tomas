import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
    return(
        <div>
            

            <Routes>
                <Route Element = {<Layout />} />
                <Route path="/" Element={<Home />}/>
                <Route path="/About" Element={<About />}/>
                <Route path="/Skills" Element={<Skills />}/>
                <Route path="/Projects" Element={<Projects />}/>
                <Route path="/Contact" Element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default App;