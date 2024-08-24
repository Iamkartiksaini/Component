import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react"

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const Gsap_iframe = ({ title, src, layerStyle = "#fff", transitionStyle = { x: "-100%" }, ...props }) => {

    useLayoutEffect(() => {
        const img = document.querySelector(`[data-image-name="${src}"]`)
        img.style.scale = "1.1"
        const layer = document.querySelector(`[data-layer-name="${src}"]`)
        const delay = 0
        const duration = 2

        if (layer) {
            const trigger = {
                trigger: img,
                start: "top center",
                end: "bottom center",
                // markers: 1,
                // scrub: 1
            }
            // const imgTrigger = {
            //     trigger: img,
            //     start: "top 80%",
            //     end: "center center",
            //     // markers: 1,
            //     // scrub: 1
            // }
            gsap.to(layer, {
                scrollTrigger: trigger, duration, delay, ease: 'expo.out', ...transitionStyle,

            })

            gsap.to(img, {
                ease: 'expo.out',
                scrollTrigger: trigger, scale: 1,
                duration,
                delay
            })
        }
    })
    return (
        <div style={{
            overflow: "hidden", position: "relative", width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} className="overflow-wrapper">
            <div
                data-layer-name={src}
                style={{
                    position: "absolute",
                    height: "100%", width: "100%",
                    top: "0", left: "0",
                    backgroundColor: layerStyle, zIndex: 3
                }}
                className="colorLayer"></div>

            <iframe
                data-image-name={src}
                width="1154" height="649" src={src || "https://www.youtube.com/embed/0DBgKh8EBIg"} title={title || "MedTracker AD"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen {...props}></iframe>
        </div>
    )
}

export default Gsap_iframe