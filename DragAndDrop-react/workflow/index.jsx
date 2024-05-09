import TitleBar from 'components/TitleBar'
import { Button } from 'primereact/button'
import styles from "./index.module.scss"
import ApplicantCard from 'components/Card/ApplicantCard/Applicant';
import { useState } from 'react';
import { applicantArray } from 'utils/constant';

const JobWorkflow = () => {

    const [fullView, setFullView] = useState(false)
    const [activeTabState, setActiveState] = useState([true, false, false, false, false])

    const [state, setState] = useState({
        [`Screen Select`]: applicantArray || [],
        [`Interview L1`]: [],
        [`Interview L2`]: [],
        [`Assessments`]: [],
        [`Offer`]: [],

    })

    const handleDragStart = (e, type, data, sourceSectionName) => {
        e.dataTransfer.setData('text/plain', type);
        if (type === "candidateCard") {
            const updatedData = { ...data, from: sourceSectionName };
            const serializedData = JSON.stringify(updatedData);
            e.dataTransfer.setData('application/type', serializedData);
        }
        else if (type === "section") {
            return
            // const btn = document.querySelector(".p-button.p-component.p-button-icon-only.p-button-rounded.p-button-lg.p-button-danger")
            console.log("section drag");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e, value, to) => {
        e.preventDefault();
        const itemType = e.dataTransfer.getData('text/plain');
        if (itemType === "candidateCard") {
            const droppedData = e.dataTransfer.getData('application/type');
            const itemData = JSON.parse(droppedData);
            const takenFrom = itemData.from;
            // Remove 'from' property from itemData
            const { from, ...updatedItemData } = itemData;
            // Check if the item already exists in the drop section
            const alreadyExists = state[to].some((val) => val.id === updatedItemData.id);
            if (alreadyExists) return;
            // Remove the item from the dragged section
            const removeItem = state[takenFrom].filter((val) => val.id !== updatedItemData.id);
            setState((prevState) => ({
                ...prevState,
                [takenFrom]: removeItem,
                [to]: [updatedItemData, ...value]
            }));
        }
    };

    const setActiveStateHandler = (index) => {
        setActiveState(activeTabState.map((_, i) => i === index));
    }

    const VerticalText = ({ index, text, sectionId, value }) => {
        return (
            <div
                draggable="true"
                onDragStart={(e) =>
                    handleDragStart(e, "section", false, sectionId)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, value, sectionId)}
                onClick={() => setActiveStateHandler(index)}
                className={styles.AccordionTabHeader}
            >
                <span>
                    <i className='pi pi-angle-down'></i>
                    <p>{text}</p>
                </span>
            </div>
        );
    }

    const AccordionSideTab = ({ className, index, text, sectionId, value }) => {
        return (
            <div
                onDragStart={(e) =>
                    handleDragStart(e, "section", data, sectionId)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, value, sectionId)}
                onClick={() => setActiveStateHandler(index)}
                className={className}
                style={activeTabState[index] ? { border: "1px solid cyan", boxShadow: "0px 0px 1px 1px cyan inset" } : null}
            >{text}
            </div>
        );
    }

    return (
        <>
            <TitleBar title={"Workspace"} >
                <Button label='Create Job' />
            </TitleBar>

            <div className={styles.workspace}>
                <header>
                    <p>Job ID:4562</p>
                    <h4>Software Engineering</h4>
                </header>
                <div className={styles.main}>
                    <div className={styles.mainLeftSection}>
                        {Object.keys(state).map((sectionId, index) => (
                            <div key={index}
                                style={!activeTabState?.[index] && fullView ? { display: "none" } : {}}
                                className={`${styles.AccordionTab} ${activeTabState[index] ? styles.active : ""} ${activeTabState[index] && fullView ? styles.fullView : ""}`}>

                                {!activeTabState[index] && !fullView && <VerticalText index={index} text={sectionId} sectionId={sectionId} value={state[sectionId]} />}
                                {activeTabState[index] && <div className={styles.tabContent}
                                >
                                    <div className={styles.tabContentHeader}>;
                                        <div className={styles.leftSection}>
                                            <i className="pi pi-angle-right"></i>
                                            <h4>{sectionId}</h4>
                                        </div>
                                        <div className={styles.rightSection}>
                                            <i className='pi pi-search'></i>
                                            <i className='pi pi-filter'></i>
                                            <i className='pi pi-sort-amount-up'></i>
                                            <i onClick={() => setFullView(pre => !pre)} className={`pi pi-window-maximize ${fullView ? " text-blue-400" : ""}`}></i>
                                        </div>
                                    </div>
                                    <div className={styles.tabContent_Data}>
                                        <ApplicantCard
                                            sectionId={sectionId}
                                            value={state[sectionId]}
                                            handleDragOver={handleDragOver}
                                            handleDrop={handleDrop}
                                            handleDragStart={handleDragStart}
                                        />
                                    </div>
                                </div>}
                            </div>
                        ))}
                        {!fullView && <p className='m-3 text-red-400'>+ Add Section</p>}
                    </div>
                    <div className={styles.mainRightSection}>
                        {!fullView ? <Button icon="pi pi-trash text-red-500" rounded
                            severity="danger" aria-label="Cancel" size="large"
                            style={{ height: "100px", width: "100px", background: "#FFAD97", borderColor: "#FFAD97", margin: "auto" }} /> :
                            <div className='flex flex-column w-full'>
                                {Object.keys(state).map((sectionId, index) => (
                                    <AccordionSideTab className={styles.fullView_tab_item} index={index} text={sectionId} sectionId={sectionId} value={state[sectionId]} />
                                ))}
                                <div className={`text-red-400 ${styles.fullView_tab_item}`} >
                                    + Add Section
                                </div>
                                <div className={styles.fullView_tab_item} >
                                    <Button icon="pi pi-trash text-red-500" rounded
                                        severity="danger" aria-label="Cancel" size="large"
                                        style={{ height: "100px", width: "100px", background: "#FFAD97", borderColor: "#FFAD97" }} />
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobWorkflow