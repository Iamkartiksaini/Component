import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Fragment, useEffect, useState } from "react";

export const handleDragStart = ({ event, type, itemIndex, sectionId }) => {
    event.dataTransfer.setData('text/plain', type);
    if (type === "dataTable_Fields_Switch") {
        const encode = JSON.stringify({ itemIndex, sectionId });
        event.dataTransfer.setData(
            "application/json",
            encode
        );
    }
};

export const handleDrop = ({ event, DroppingTo, state, setState }) => {
    event.preventDefault();
    const itemType = event.dataTransfer.getData('text/plain');

    if (itemType === "dataTable_Fields_Switch") {
        const droppedData = event.dataTransfer.getData("application/json");
        const parseData = JSON.parse(droppedData);
        const { itemIndex, sectionId } = parseData;
        if (sectionId === DroppingTo) {
            const targetIndex = event.target.getAttribute("data-index");
            const newSectionId = event.target.getAttribute("data-section");
            if (targetIndex !== undefined) {
                const newIndex = parseInt(targetIndex, 10);
                if (newIndex !== itemIndex) {
                    const updatedSection = [...state[newSectionId]];
                    const [movedItem] = updatedSection.splice(itemIndex, 1);
                    updatedSection.splice(newIndex, 0, movedItem);
                    setState((prevState) => ({
                        ...prevState,
                        [newSectionId]: updatedSection
                    }));
                }
            }
            return
        }
        const updatedItemData = state[sectionId][itemIndex];
        const updatedSourceSection = [
            ...state[sectionId].slice(0, itemIndex),
            ...state[sectionId].slice(itemIndex + 1)
        ];

        const updatedTargetSection = [updatedItemData, ...state[DroppingTo]];
        setState((prevState) => ({
            ...prevState,
            [sectionId]: updatedSourceSection,
            [DroppingTo]: updatedTargetSection
        }));
    }
};

export const DragAndDropSections = ({ data, sectionId, state, setState }) => {

    const [dataCopy, updateDataCopy] = useState(data)
    const [filterValue, setFilterValue] = useState("")
    const [dropOnIndex, setDropOnIndex] = useState(null)
    const [dragItem, setDragItem] = useState(null)
    const dropOnState = {
        dropOnIndex,
        setDropOnIndex
    }
    const dragItemState = {
        dragItem, setDragItem
    }

    useEffect(() => {
        if (dropOnIndex !== null) {
            setDropOnIndex(null)
        }
        if (dragItem !== null) {
            setDragItem(null)
        }
        updateDataCopy(state[sectionId])
    }, [state])

    function filterObjectsByValue(item, compareValue) {
        return Object.values(item).some(val => {
            if (typeof val === 'string') {
                return val.toLowerCase().includes(compareValue.toLowerCase());
            }
            return false;
        }) ? true : false;
    }
    return <>
        <div style={{ alignItems: "center" }} className="p-inputgroup flex-1 pr">
            <i style={{ paddingLeft: "10px", color: "var(--labelColor)" }} className="pi pi-search" > </i>
            <InputText value={filterValue} onChange={(e) => setFilterValue(e.target.value)} size='small' placeholder="Keyword" className='smallBtn' />
            <Button onClick={() => setFilterValue("")} text size='small' icon="pi pi-times" className="smallBtn" />
        </div>
        <div className='List'
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                handleDrop({ event, value: data, DroppingTo: sectionId, state, setState })
                setDropOnIndex(null)
            }}>
            {dataCopy.map((field, index) => {
                const isMatched = filterObjectsByValue(field, filterValue)
                if (!isMatched) return
                return <Fragment key={index}><DragItemWrapper
                    dropOnState={dropOnState}
                    dragItemState={dragItemState}
                    itemIndex={index}
                    sectionId={sectionId}
                    item={field}
                /></Fragment>
            })}
        </div>
    </>
}

export const DragItemWrapper = ({ item, sectionId, itemIndex, dropOnState, dragItemState }) => {
    return <>
        <li
            data-index={itemIndex}
            data-section={sectionId}
            title={item.headerName}
            className='item'
            style={dragItemState.dragItem === itemIndex ? { backgroundColor: "var(--yellow-100)" } : {}}
            onDragOver={(event) => {
                event.preventDefault()
                if (dragItemState.dragItem === itemIndex) return
                dropOnState.setDropOnIndex(itemIndex)
            }}
            draggable="true" onDragStart={(e) => {
                handleDragStart({ event: e, type: "dataTable_Fields_Switch", itemIndex, sectionId })
                dragItemState.setDragItem(itemIndex)
            }}>
            {item.headerName}
        </li>
        {dropOnState.dropOnIndex === itemIndex && <li data-index={itemIndex}
            data-section={sectionId} className='placeholder'></li>}
    </>
}
