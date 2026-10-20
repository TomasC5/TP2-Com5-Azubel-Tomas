function Projects(props) {
    return(
        <div className="projects">
            <img src={props.projImg} alt="" width= "200px"></img>
            <p>Project name: {props.proj}</p>
            <p>Summary: {props.summary}</p>
        </div>
    );
}

export default Projects;