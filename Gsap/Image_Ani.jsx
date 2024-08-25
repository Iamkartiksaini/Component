import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const GsapImage = ({ height, width, src, alt, scrub = false, markers = false, imageCSS_Style = {}, layerCSS_Style = { backgroundColor: "#fff" },
    image_transitionStyle = {},
    transitionStyle = { x: "-100%" }, ...props }) => {
    let newAlt = alt || src
    let getSrc = src.includes("http") ? src : "/assets/" + src
    const date = new Date().getMilliseconds()
    const generateRandomId = Math.random().toPrecision(3) + date

    const handleLoad = () => {
        const img = document.querySelector(`[data-image-name="${generateRandomId}"]`)
        const layer = document.querySelector(` [data-layer-name="${generateRandomId}"]`)
        const delay = .20
        const duration = 2

        if (layer) {
            const trigger = {
                trigger: img,
                start: "center bottom",
                end: "bottom center",
                markers,
                scrub
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
                delay,
                ...image_transitionStyle
            })
        }
    };

    return (
        <div style={{
            overflow: "hidden", position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }} className="overflow-wrapper">
            <div
                data-layer-name={generateRandomId}
                style={{
                    position: "absolute",
                    height: "100%", width: "100%",
                    top: "0", left: "0",
                    zIndex: 3, ...layerCSS_Style
                }}
                className="colorLayer"></div>
            <img loading="lazy"
                style={{
                    scale: "1.5",
                    maxHeight: "calc(100vh - var(--header-h) - 2rem)",
                    objectFit: "cover",
                    ...imageCSS_Style
                }}
                onLoad={handleLoad}
                height={height} width={width} data-image-name={generateRandomId} src={getSrc} alt={newAlt} {...props} />
        </div>
    )
}

export default GsapImage