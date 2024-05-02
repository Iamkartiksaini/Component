import React, { useState } from 'react'
const Sidebar = () => {
    const [checked, setChecked] = useState(false);
    const toggleTheme = () => {
        setChecked(pre => !pre)
        const sidebar = document.querySelector("#sidebar")
        sidebar.classList.toggle("darkMode")
    }
    const toggleMenu = () => {
        const sidebar = document.querySelector("#sidebar")
        sidebar.classList.toggle("quick")
    }
    return (
        <div className='Sidebar shadow-4 ' id='sidebar'>
            <div className="logo">
                <img height="40px" width="40px" src="favicon.ico" alt="" />
                <div className="text">
                    <h2>
                        Kartik Saini
                    </h2>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className="navigations">
                <a>
                    <i className='pi pi-home'></i>
                    <span>Home</span>
                </a>
                <a>
                    <i className='pi pi-chart-bar'></i>
                    <span>Stats</span>
                </a>
                <a>
                    <i className="pi pi-bell"></i>
                    <span>Notifications</span>
                </a>
                <a>
                    <i className="pi pi-chart-pie"></i>
                    <span>Analytic</span>
                </a>
                <a>
                    <i className="pi pi-warehouse"></i>
                    <span>inventory</span>
                </a>
            </div>
            <div className="bottom">
                <div className="themeMode active" onClick={toggleTheme} >
                    {checked ? <i id='moon' className="pi pi-moon active"></i> :
                        <i id='sun' className="pi pi-sun active"></i>}
                    <label htmlFor="theme">Dark Mode</label>
                </div>
                <a>
                    <i className="pi pi-cog"></i>
                    <span>Setting</span>
                </a>
                <a>
                    <i className="pi pi-sign-out"></i>
                    <span>Logout</span>
                </a>
            </div>
            <i id='toggleBtn' className='pi pi-angle-left' onClick={toggleMenu}></i>
        </div>
    )
}

export default Sidebar
