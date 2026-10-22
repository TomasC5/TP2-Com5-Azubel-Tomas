function Projects(props) {
    return(
        <div>
            <img src={props.projImg} alt="" width= "400px"></img>
            <p>Project name: {props.proj}</p>
            <p>Summary: {props.summary}</p>
        </div>
    );
}

export default Projects;