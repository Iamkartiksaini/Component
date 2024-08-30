import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles/LineAnimation.scss";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const LineToWords = (props) => {
    let {
        children,
        duration = 2,
        delay = 0.1,
        scrub = false,
        markers = false,
        initX = "0%",
        initY = "100%",
        trigger = {},
        defaultStyle = true,
        initialStyle = {},
        finalStyle = { x: "0%", y: "0%" },
    } = props;

    initialStyle.transform = `translate(${defaultStyle ? initX : "0%"}, ${defaultStyle ? initY : "0%"
        })`;

    finalStyle.x = "0%";
    finalStyle.y = "0%";

    const wordsRef = useRef([]);

    useEffect(() => {
        wordsRef.current.forEach((word, index) => {
            gsap.to(word, {
                scrollTrigger: {
                    trigger: word,
                    start: "top 80%",
                    scrub,
                    markers,
                    ...trigger
                },
                duration,
                ease: "expo.out",
                delay: index * delay,
                ...finalStyle,
            });
        });
    }, []);

    const words = children.split(" ").map((word, index) => (
        <div className="word-wrapper" key={index}>
            <div
                className="char-wrapper"
                ref={(el) => (wordsRef.current[index] = el)}
                style={{ ...initialStyle }}
            >
                {word}
            </div>
        </div>
    ));

    return <div className="line-wrapper">{words}</div>;
};

export const GsapComponent = (props) => {

    let {
        children,
        duration = 2,
        delay = 0,
        trigger,
        defaultStyle = true,
        scrub = false,
        markers = false,
        initX = "100%",
        initY = "0%",
        initialStyle = {},
        finalStyle = {},
    } = props

    initialStyle.transform = `translate(${defaultStyle ? initX : "0%"}, ${defaultStyle ? initY : "0%"
        })`;
    finalStyle.x = "0%";
    finalStyle.y = "0%";

    const lineRef = useRef();

    useEffect(() => {
        gsap.to(lineRef.current, {
            scrollTrigger: {
                trigger: lineRef.current,
                start: "top 80%",
                scrub,
                markers,
                ...trigger,
            },
            duration,
            ease: "expo.out",
            delay,
            ...finalStyle,
        });
    }, []);
    return (
        <div style={{ overflow: "hidden" }} className="line-wrapper">
            <div style={{ ...initialStyle }} ref={lineRef} className="word-wrapper">
                {children}
            </div>
        </div>
    );
};
