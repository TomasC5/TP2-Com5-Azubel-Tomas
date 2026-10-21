import { NavLink } from "react-router-dom";

const links = [
    {to: "/", texto: "Home"}, 
    {to: "/about", texto: "About"}, 
    {to: "/skills", texto: "Skills"},
    {to: "/projects", texto: "Projects"},
    {to: "/contact", texto: "Contact"}
    ];

function Sidebar() {
    
    return(
        <aside className="sidebar">
            <h1>Azubel Tomas</h1><hr /> 
            <h2>Portfolio</h2>
            <h4>Web Developer</h4>
            
            <nav className="botones">
                {links.map((link) => (
                    <NavLink
                    key = {link.to} to = {link.to} end={link.to === "/"}
                    className={({isActive}) => (isActive ? "navLinkActual" : "nav-Link")}>
                        {link.texto}
                    </NavLink>
                ))}
                
            </nav>

            <p></p>
        </aside>
    )
}

export default Sidebar;