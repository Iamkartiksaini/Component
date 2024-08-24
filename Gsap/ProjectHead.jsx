import LineSplitter from "./Line_Ani"
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
                    <LineSplitter>
                        {title}
                    </LineSplitter>
                </div>
                <div className="h2 text-600">
                    <LineSplitter>
                        {category}
                    </LineSplitter>
                </div>
            </div>
            <div className="description">
                <div className='p time'>
                    <LineSplitter>
                        {date}
                    </LineSplitter>
                </div>
                <div className='txt p'>
                    <LineSplitter>
                        {description}
                    </LineSplitter>
                </div>
            </div>
        </div>
    )
}

export default ProjectHead