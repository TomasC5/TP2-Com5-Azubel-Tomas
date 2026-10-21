import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
    return(
            <Routes>
                    <Route element = {<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Skills" element={<Skills />}/>
                    <Route path="/Projects" element={<Projects />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    </Route>
            </Routes>
    )
}

export default App;