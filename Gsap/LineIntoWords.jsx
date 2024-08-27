import React, { Fragment, useLayoutEffect, useRef } from 'react';
import "./styles/LineAnimation.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { promiseImgLoaded } from '@/Utils/checksImagesLoaded';

gsap.registerPlugin(ScrollTrigger);

const WordSplitter = ({ word }) => {
    return (
        <div className="word-wrapper">
            {word}
        </div>
    );
};

const LineSplitter = ({ delay = 1, children }) => {
    const line = children || "No Words";
    const wordsRef = useRef([]);

    useLayoutEffect(() => {
        wordsRef.current.forEach((wordRef, index) => {
            gsap.to(`#word-${index}`,
                {
                    scrollTrigger: {
                        trigger: wordRef,
                        start: "top 80%",
                        markers: 1, scrub: 1
                    },
                    y: "100%",
                    duration: 0.5, delay: index * 0.2
                },
            );
        });

    }, [children]);

    return (
        <div className="line-wrapper">
            {line.split(' ').map((word, index) => (
                <Fragment key={index}>
                    <div id={'word-' + index} style={{ display: "contents" }} ref={el => wordsRef.current[index] = el}>
                        <WordSplitter word={word} />
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default LineSplitter;
