import React from 'react'
import { useRef } from 'react'

const PopupMenu = ({ isPostOfTheUser }) => {
    const menuRef = useRef()
    const items = [
        {
            label: "More Info",
            icon: "pi pi-chart-line"
        },
        {
            label: 'Report',
            icon: 'pi pi-exclamation-triangle'
        }
    ]

    return (
        <div className="menu">
            <i onClick={(event) => {
                event.stopPropagation();
                console.log(menuRef.current.getAttribute("data-menu-isopen"))
                menuRef.current.setAttribute("data-menu-isopen", "true")
            }} className='pi pi-ellipsis-h optionBtn' aria-controls="popup_menu_right" aria-haspopup></i>
            <div ref={menuRef} data-menu-isopen="false" className="menu-modal">
                <p>Options</p>
                {items.map((val, ind) => {
                    return <p className='item' key={ind}>
                        <i className={val.icon}></i>
                        <span>{val.label}</span>
                    </p>
                })}
            </div>
        </div>
    )
}

export default PopupMenu