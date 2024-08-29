import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./styles/LineAnimation.scss"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const StaggeredWords = ({ children, duration = 2, delay = 0, scrub = false, markers = false, initX = "0%", initY = "100%",
    layerCSS_Style = { transform: `translate(${initX}, ${initY})` },
    transitionStyle = { x: "0%", y: "0%" } }) => {


    layerCSS_Style.transform = `translate(${initX}, ${initY})`
    transitionStyle.x = "0%"
    transitionStyle.y = "0%"

    const wordsRef = useRef([]);


    useEffect(() => {
        wordsRef.current.forEach((word, index) => {
            gsap.to(word, {
                scrollTrigger: {
                    trigger: word,
                    start: "top 90%",
                    scrub, markers,
                },
                duration,
                ease: 'expo.out',
                delay: index * delay,
                ...transitionStyle
            });
        });

    }, []);

    const words = children.split(' ').map((word, index) => (
        <div className='word-wrapper' key={index} >
            <div className="char-wrapper" ref={el => wordsRef.current[index] = el} style={{ ...layerCSS_Style }}>
                {word}
            </div>
        </div>
    ));

    return <div className='line-wrapper'>{words}</div>;
};

export default StaggeredWords;


export const StaggeredLine = ({ children, duration = 2, delay = 0,
    trigger,
    scrub = false, markers = false, initX = "100%", initY = "0%",
    layerCSS_Style = {},
    transitionStyle = {} }) => {

    layerCSS_Style.transform = `translate(${initX}, ${initY})`
    transitionStyle.x = "0%"
    transitionStyle.y = "0%"

    const lineRef = useRef();

    useEffect(() => {
        gsap.to(lineRef.current, {
            scrollTrigger: {
                trigger: lineRef.current,
                start: "-=10% 90%",
                scrub, markers, ...trigger
            },
            duration,
            ease: 'expo.out',
            delay,
            ...transitionStyle,
        });
    }, []);
    return <div style={{ overflow: "hidden" }} className='line-wrapper'>
        <div style={{ ...layerCSS_Style }} ref={lineRef} className='word-wrapper'  >
            {children}
        </div>
    </div>;
};
