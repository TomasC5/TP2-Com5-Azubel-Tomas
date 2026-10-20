function Skills(props) {
    return(
        <div className="skills">
            <p>Language: {props.language}</p>
            <p>Summary: {props.summary}</p>
            <p>Learnt: {props.isLearnt ? "Yes" : "In process..."}</p>
        </div>
    );
}

export default Skills;