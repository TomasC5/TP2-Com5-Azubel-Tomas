import { NavLink } from "react-router-dom";

const links = [
    {to: "/", texto: "Home"}, 
    {to: "/", texto: "About"}, 
    {to: "/", texto: "Skills"},
    {to: "/", texto: "Projects"},
    {to: "/", texto: "Contact"}
    ];

function Sidebar() {
    
    return(
        <aside className="sidebar">
            <h1>Azubel Tomas - Portfolio</h1>
            <p>Desarrollador Web</p>
            
            <nav>
                {links.map((link) => (
                    <navLink
                    key = {link.to} to = {link.to} end={link.to === "/"}
                    className={({isActive}) => (isActive ? "navLinkActual" : "nav-Link")}>
                        {link.texto}
                    </navLink>
                ))}
                
            </nav>
        </aside>
    )
}

export default Sidebar;