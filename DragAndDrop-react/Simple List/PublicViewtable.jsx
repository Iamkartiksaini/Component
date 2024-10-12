import React, { useState } from 'react'
import { Button } from 'primereact/button';
import "./style.scss"
import { DragAndDropSections } from './DragAndDrop';
const PublicViewtable = () => {
    const allOptions = [
        // { headerName: "Lead Name*", field: "Lead Name*" },
        // { headerName: "Company", field: "Company" },
        // { headerName: "Email", field: "Email" },
        // { headerName: "Phone", field: "Phone" },
        // { headerName: "Lead Source", field: "Lead Source" },
        // { headerName: "Lead Owner", field: "Lead Owner" },
        { headerName: "Annual Revenue", field: "Annual Revenue" },
        { headerName: "City", field: "City" },
        { headerName: "Converted Account", field: "Converted Account" },
        { headerName: "Converted Contact", field: "Converted Contact" },
        { headerName: "Converted Deal", field: "Converted Deal" },
        { headerName: "Country", field: "Country" },
        { headerName: "Created By", field: "Created By" },
        { headerName: "Created Time", field: "Created Time" },
        { headerName: "Description", field: "Description" },
        { headerName: "Email Opt Out", field: "Email Opt Out" },
        { headerName: "Fax", field: "Fax" },
        { headerName: "First Name", field: "First Name" },
        { headerName: "Industry", field: "Industry" },
        { headerName: "Last Activity Time", field: "Last Activity Time" },
        { headerName: "Last Name*", field: "Last Name*" },
        { headerName: "Lead Status", field: "Lead Status" },
        { headerName: "Mobile", field: "Mobile" },
        { headerName: "Modified By", field: "Modified By" },
        { headerName: "Modified Time", field: "Modified Time" },
        { headerName: "No. of Employees", field: "No. of Employees" },
        { headerName: "Phone type", field: "Phone type" },
        { headerName: "Primary Phone NO", field: "Primary Phone NO" },
        { headerName: "Rating", field: "Rating" },
        { headerName: "Salutation", field: "Salutation" },
        { headerName: "Secondary Email", field: "Secondary Email" },
        { headerName: "Skype ID", field: "Skype ID" },
        { headerName: "State", field: "State" },
        { headerName: "Street", field: "Street" },
        { headerName: "Title", field: "Title" },
        { headerName: "Twitter", field: "Twitter" },
        { headerName: "Unsubscribed Mode", field: "Unsubscribed Mode" },
        { headerName: "Unsubscribed Time", field: "Unsubscribed Time" },
        { headerName: "Website", field: "Website" },
        { headerName: "Whatsapp No", field: "Whatsapp No" },
        { headerName: "Zip Code", field: "Zip Code" }
    ]
    const leadOptionsArray = [
        { headerName: "Lead Name*", field: "Lead Name*" },
        { headerName: "Company", field: "Company" },
        { headerName: "Email", field: "Email" },
        { headerName: "Phone", field: "Phone" },
        { headerName: "Lead Source", field: "Lead Source" },
        { headerName: "Lead Owner", field: "Lead Owner" }
    ];
    const [tableFields, setTableFields] = useState({
        "all_Fields": [...allOptions],
        "active_Fields": [...leadOptionsArray]
    })
    return (
        <div className='PublicViewtable'>
            <div className="nav-bar">
                <div className="left-section">
                    <a href="/dashboard/contacts">
                        <i className='pi pi-arrow-left'></i>
                    </a>
                    <p>All Contacts <i className='pi pi-star'></i></p>
                </div>
                <div className="right-section">
                    <i className='pi pi-info-circle'></i>
                </div>
            </div>
            <section>
                <p>
                    Choose Columns - Tabular View  <i className='pi pi-info-circle'></i>
                </p>
                <div className="Columns">
                    <div className="col">
                        <p style={{ fontWeight: "500" }}>Available</p>
                        <div className="wrapper">
                            <DragAndDropSections data={tableFields["all_Fields"]} sectionId={"all_Fields"} state={tableFields} setState={setTableFields} />
                        </div>
                    </div>
                    <div className="col">
                        <p style={{ fontWeight: "500" }}>Selected</p>
                        <div className="wrapper">
                            <DragAndDropSections data={tableFields["active_Fields"]} sectionId={"active_Fields"} state={tableFields} setState={setTableFields} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="_footer pr">

                <Button size='small' className='smallBtn' label='Save' />
                <Button size='small' severity='secondary' className='smallBtn' label='Cancel' />
            </div>
        </div>
    )
}

export default PublicViewtable

