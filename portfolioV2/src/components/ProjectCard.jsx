import pfp from "../assets/pfp.jpg"

function ProjectCard() {
    return(
        <div className = "card">
            <img className="card-image" src={pfp} alt="pfp" width="150"></img>
            <h2 className="card-title">Tomás Azubel</h2>
            <p className="card-text">Programming with React + Vite</p>
        </div>
    )
}

export default ProjectCard;