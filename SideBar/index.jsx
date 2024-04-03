import React, { useEffect } from 'react'
import "./sidebar.scss"
const Sidebar = () => {
    const navigations = [
        { icon: "xyz", link: "Home", text: "Home" },
        { icon: "xyz", link: "Notifications", text: "Notifications" },
        { icon: "xyz", link: "Message", text: "Message" },
        { icon: "xyz", link: "Search", text: "Search" },
        { icon: "xyz", link: "Discover", text: "Discover" },
        { icon: "xyz", link: "Setting", text: "Setting" },
    ]
    const toggle = () => {
        const doc = document.querySelector(".Sidebar")
        doc.classList.toggle("quick")
        const toggleMenu = document.querySelector("#toggle")

    }
    const darkTheme = {
        bg: "#09090A",
        textColor: "#EFEFEF",
        iconsColor: "#C8BCF6", commentText: "#b1b1b1", hoverColor: "#f5f5f512"
    }
    const lightTheme = {
        bg: "#ffff",
        textColor: "#09090A",
        iconsColor: "#09090A", commentText: "#b1b1b1", hoverColor: "#8f8f8f87"
    }
    const toggletheme = () => {
        const doc = document.querySelector(".themeMode")
        const label = document.querySelector(".themeMode label")
        const sun = document.querySelector(".themeMode #sun")
        const moon = document.querySelector(".themeMode #moon")
        const input = document.querySelector(".themeMode input")
        const root = document.querySelector("#root");

        doc.classList.toggle("active")
        moon.classList.toggle("active")
        sun.classList.toggle("active")
        if (doc.classList.contains("active") === true) {
            label.innerText = "Dark Mode"
            root.style.setProperty("--bg", darkTheme.bg);
            root.style.setProperty("--textColor", darkTheme.textColor);
            root.style.setProperty("--iconsColor", darkTheme.iconsColor);
            root.style.setProperty("--hoverColor", darkTheme.hoverColor);
        }
        else {
            label.innerText = "Light Mode"
            root.style.setProperty("--bg", lightTheme.bg);
            root.style.setProperty("--textColor", lightTheme.textColor);
            root.style.setProperty("--iconsColor", lightTheme.iconsColor);
            root.style.setProperty("--hoverColor", lightTheme.hoverColor);
        }
    }


    return (
        <div className='Sidebar'>
            <div className="logo">
                {/* <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="16" fill="#C8BCF6" />
                    <path d="M31.1172 19.8672V30.9531C31.1172 32.1484 30.8633 33.2188 30.3555 34.1641C29.8555 35.1094 29.0977 35.8594 28.082 36.4141C27.0664 36.9609 25.7891 37.2344 24.25 37.2344C22.0547 37.2344 20.3828 36.6602 19.2344 35.5117C18.0938 34.3555 17.5234 32.8203 17.5234 30.9062V19.8672H20.3359V30.6602C20.3359 32.0898 20.6719 33.1445 21.3438 33.8242C22.0156 34.5039 23.0195 34.8438 24.3555 34.8438C25.2773 34.8438 26.0273 34.6836 26.6055 34.3633C27.1914 34.0352 27.6211 33.5586 27.8945 32.9336C28.1758 32.3008 28.3164 31.5391 28.3164 30.6484V19.8672H31.1172ZM35.5 37V19.8672H38.3125V37H35.5Z" fill="#09090A" />
                </svg> */}

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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 21H5C3.89543 21 3 20.1046 3 19V12.2969C3 11.7852 3.19615 11.2929 3.54809 10.9215L10.5481 3.53257C11.3369 2.69989 12.663 2.69989 13.4519 3.53257L20.4519 10.9215C20.8038 11.2929 21 11.7852 21 12.2969V19C21 20.1046 20.1046 21 19 21H14M10 21V15.5C10 15.2239 10.2239 15 10.5 15H13.5C13.7761 15 14 15.2239 14 15.5V21M10 21H14" stroke="#1F1F22" strokeWidth="1.5" />
                    </svg>
                    <span>Home</span>
                </a>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1F1F22" strokeWidth="1.5" />
                        <path d="M8 16V12" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 16V10" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M16 16V8" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>Stats</span>
                </a>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.27979 10.0666C7.48378 7.58099 9.58398 5.60569 12.0779 5.59042C14.5491 5.57528 16.5667 7.53275 16.8167 9.99132C16.9708 11.5062 17.3972 12.9016 18.2535 14.387C19.1227 15.8946 18.1938 18 16.4536 18H7.70451C5.95986 18 5.05177 15.842 5.93026 14.3347C6.77155 12.8912 7.15963 11.5309 7.27979 10.0666Z" stroke="#1F1F22" strokeWidth="1.5" />
                        <path d="M12 3V5" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18" stroke="#1F1F22" strokeWidth="1.5" />
                    </svg>
                    <span>Notifications</span>
                </a>
                <a>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.3552 22 21.7272 17.7905 21.9877 12.4999C22.0013 12.2241 21.7761 12 21.5 12H12.5C12.2239 12 12 11.7761 12 11.5V2.5C12 2.22386 11.7759 1.9987 11.5001 2.01228C6.20948 2.27276 2 6.64479 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1F1F22" strokeWidth="1.5" />
                        <path d="M21.9846 9.49991C21.7367 5.47997 18.52 2.26332 14.5001 2.01538C14.2245 1.99838 14 2.22386 14 2.5V9.5C14 9.77614 14.2239 10 14.5 10H21.5C21.7761 10 22.0016 9.77553 21.9846 9.49991Z" stroke="#1F1F22" strokeWidth="1.5" />
                    </svg>
                    <span>Analytic</span>
                </a>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10M3 10L4.58555 4.45056C4.83087 3.59196 5.61564 3 6.5086 3H12M3 10H12M21 10L19.4144 4.45056C19.1691 3.59195 18.3844 3 17.4914 3H12M21 10H12M12 3V10" stroke="#1F1F22" strokeWidth="1.5" />
                        <path d="M5.5 17.5H12" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>inventory</span>
                </a>



            </div>
            <div className="bottom">
                <div className="themeMode active" onClick={toggletheme}>
                    <svg id='moon' className='active' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9562 15.1359C16.4234 14.8673 14.8947 13.7416 13.9736 12.0223C12.8847 9.98963 12.9628 7.72039 14.0142 6.27944C14.122 6.13175 14.24 5.99276 14.368 5.86362C14.6149 5.61455 14.5435 5.14979 14.1963 5.09307C13.9699 5.05608 13.7399 5.02981 13.5067 5.01481C13.354 5.00499 13.2 5 13.0447 5C9.15403 5 6 8.13401 6 12C6 15.866 9.15403 19 13.0447 19C15.2587 19 17.2342 17.9852 18.5256 16.3981C18.6724 16.2178 18.8103 16.0301 18.9387 15.8356C19.1217 15.5585 18.8679 15.2066 18.5345 15.1961C18.3425 15.19 18.1493 15.1697 17.9562 15.1359Z" stroke="#C8BCF6" strokeWidth="1.5" />
                    </svg>
                    <svg id='sun' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="5" stroke="#C8BCF6" strokeWidth="1.5" />
                        <path d="M12 19.5V22" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 2V4.5" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4.5 12L2 12" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M22 12L19.5 12" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M17.3033 6.69678L19.0711 4.92901" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4.92894 19.0713L6.69671 17.3035" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M17.3033 17.3032L19.0711 19.071" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M4.92896 4.92896L6.69672 6.69672" stroke="#C8BCF6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>

                    <label htmlFor="theme">Dark Mode</label>
                </div>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12L19 12M19 12L17 10M19 12L17 14M15 16L15 19C15 20.1046 14.1046 21 13 21L7 21C5.89543 21 5 20.1046 5 19L5 5C5 3.89543 5.89543 3 7 3L13 3C14.1046 3 15 3.89543 15 5L15 8" stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>Logout</span>
                </a>
                <a>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.08168 13.9445C2.55298 12.9941 2.28862 12.5188 2.28862 12C2.28862 11.4812 2.55298 11.0059 3.08169 10.0555L4.43094 7.63L5.85685 5.24876C6.4156 4.31567 6.69498 3.84912 7.14431 3.5897C7.59364 3.33028 8.13737 3.3216 9.22483 3.30426L12 3.26L14.7752 3.30426C15.8626 3.3216 16.4064 3.33028 16.8557 3.5897C17.305 3.84912 17.5844 4.31567 18.1431 5.24876L19.5691 7.63L20.9183 10.0555C21.447 11.0059 21.7114 11.4812 21.7114 12C21.7114 12.5188 21.447 12.9941 20.9183 13.9445L19.5691 16.37L18.1431 18.7512C17.5844 19.6843 17.305 20.1509 16.8557 20.4103C16.4064 20.6697 15.8626 20.6784 14.7752 20.6957L12 20.74L9.22483 20.6957C8.13737 20.6784 7.59364 20.6697 7.14431 20.4103C6.69498 20.1509 6.4156 19.6843 5.85685 18.7512L4.43094 16.37L3.08168 13.9445Z" stroke="#33363F" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" stroke="#33363F" strokeWidth="2" />
                    </svg>
                    <span>Setting</span>
                </a>
            </div>
            <img id='toggle' onClick={toggle} src='right-arrow.png' height={16} width={16} alt='arrow' />
        </div>
    )
}

export default Sidebar
