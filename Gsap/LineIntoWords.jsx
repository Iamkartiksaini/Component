import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./styles/LineAnimation.scss"
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const StaggeredWords = ({ children, layerCSS_Style = {}, transitionStyle = { y: "0%" } }) => {
    const wordsRef = useRef([]);
    const duration = .5
    const staggerEffect = .1
    const delay = .2

    useEffect(() => {
        wordsRef.current.forEach((word, index) => {
            gsap.to(word, {
                scrollTrigger: {
                    trigger: word,
                    start: "top 90%"
                },
                duration,
                y: "0%",
                ease: 'expo.out',
                delay: index * delay,
                ...transitionStyle
            });
        });

    }, []);

    const words = children.split(' ').map((word, index) => (
        <div className='word-wrapper' key={index} >
            <div className="char-wrapper" ref={el => wordsRef.current[index] = el} style={{ transform: "translate(0px, 100%)", ...layerCSS_Style }}>
                {word}
            </div>
        </div>
    ));

    return <div className='line-wrapper'>{words}</div>;
};

export default StaggeredWords;
