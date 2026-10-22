import Projects from '../pages/Projects';
import dashboard from '../assets/dashboard.png'
import landingpage from '../assets/landingpage.png'
import taskmanager from '../assets/taskmanager.png'

function ProjectCard() {
    
    return(
        <div>
            <Projects projImg={dashboard} proj="Dashboard" summary="responsive React dashboard featuring reusable components, interactive UI elements, and organized data presentation."/>
            <Projects projImg={taskmanager} proj="Task Manager" summary="Dynamic JavaScript task management application that allows users to add, edit, complete, and delete tasks."/>
            <Projects projImg={landingpage} proj="Responsive Landing Page" summary="Modern, responsive landing page using HTML, CSS, and JavaScript."/>
        </div>
    );
}

export default ProjectCard;