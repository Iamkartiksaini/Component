import "./JigglyButtonStyle.scss"
const JigglyButton = ({ label = "Know More", btnClass = "btn-yellow", ...btnProps }) => {
    return (
        <button  {...btnProps} className={`jigglyButton  primary-button ${btnClass}`}>
            <span >{label}</span>
        </button>
    )
}

export default JigglyButton

