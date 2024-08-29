import StaggeredWords from "./LineIntoWords"
import "./styles/ProjectHead.scss"

const ProjectHead = (props) => {
    const {
        title = "MedTracker",
        category = "Content Production",
        date = "MedTracker - 2020",
        description = "Medtech startup's mobile app helps people to manage their medicine intake and health. To present the mobile app and its value to its target audience, MedTracker asked us to produce a demo video."
    } = props
    return (
        <div className="ProjectHead">
            <div className="section-1">
                <div className="h1 text-600">
                    <StaggeredWords duration={1} delay={.4} >
                        {title}
                    </StaggeredWords>
                </div>
                <div className="h2 text-600">
                    <StaggeredWords duration={1} delay={.4} >
                        {category}
                    </StaggeredWords>
                </div>
            </div>
            <div className="description">
                <div className='p time'>
                    <StaggeredWords duration={1} delay={.4} >
                        {date}
                    </StaggeredWords>
                </div>
                <div className='txt p'>
                    <StaggeredWords duration={1} delay={.02} >
                        {description}
                    </StaggeredWords>
                </div>
            </div>
        </div>
    )
}

export default ProjectHead