import Skills from "../pages/Skills";

function SkillCard() {
    return(
        <div>
            <Skills language="HTML" summary="Webpage core" isLearnt={true}/>
            <hr></hr>
            <Skills language="CSS" summary="Webpage styling" isLearnt={true}/>
            <hr></hr>
            <Skills language="Javascript" summary="Webpage functions" isLearnt={true}/>
            <hr></hr>
            <Skills language="React libraby" summary="Webpage interfaces" isLearnt={false}/>
        </div>
    )
}

export default SkillCard;