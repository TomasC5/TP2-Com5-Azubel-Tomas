import { useState, useEffect } from "react";

function ThemeButton() {

    const [color, setColor] = useState(false);
    useEffect(() => {document.body.classList.toggle("dark", color);}, [color])
    
    return(
        <button className="toggleButton" onClick={() =>{setColor(!color)}}>Toggle Light/Dark Mode</button>
    )
}

export default ThemeButton;