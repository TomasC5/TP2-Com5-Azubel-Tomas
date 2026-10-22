import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
    return(
                <Routes>
                    <Route element = {<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="/Skills" element={<SkillCard />}/>
                    <Route path="/Projects" element={<ProjectCard />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    </Route>
                </Routes>
            
    )
}

export default App;