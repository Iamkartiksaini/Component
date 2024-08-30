import React, { Fragment, useLayoutEffect, useRef } from 'react';
import "./styles/LineAnimation.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { promiseImgLoaded } from '@/Utils/checksImagesLoaded';

gsap.registerPlugin(ScrollTrigger);

const WordSplitter = ({ word, index, delay = 1 }) => {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        var char_tl = null
        async function loadItems() {
            const x = await promiseImgLoaded()
            if (x) {
                char_tl = gsap.timeline({
                    scrollTrigger: triggerRef.current,
                    defaults: {
                        duration: .5, // Duration for character animation
                        stagger: {
                            amount: 0.2, // Stagger amount for characters
                            from: "start"
                        },
                        ease: 'expo.out',
                        delay
                    }
                });

                // Animate letters
                char_tl.to(
                    lettersRef.current,
                    {
                        y: "0%",
                        stagger: {
                            amount: 0.5, // Stagger amount for characters
                            from: "start"
                        }
                    }
                );
            }
        }
        loadItems()
        return () => {
            char_tl?.kill();
        };
    }, [word]);

    return (
        <div ref={triggerRef} className="word-wrapper">
            {word.split('').map((char, charIndex) => (
                <div className='char-wrapper' ref={setlettersRef} style={{
                    display: "inline-block",
                    transform: "translateY(100%)"
                }} key={charIndex}>{char}</div>
            ))}
        </div>
    );
};

const LineToCharacters = ({ delay = 1, children }) => {
    const line = children || "No Words";
    const wordsRef = useRef([]);

    // useLayoutEffect(() => {
    //     const lineAnim = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: wordsRef.current,
    //             start: "top center",
    //             end: "center center",
    //         },
    //         defaults: {
    //             duration: 0.2, // Duration for word animation
    //             stagger: {
    //                 amount: 0.2, // Stagger amount for words
    //                 from: "start"
    //             },
    //             delay
    //         }
    //     });

    //     // Animate each word sequentially
    //     line.split(' ').forEach((word, index) => {
    //         lineAnim.add(() => {
    //             // Animate the word itself
    //             gsap.to(wordsRef.current[index], {
    //                 y: "0%",
    //                 duration: 0.2,
    //                 onComplete: () => {
    //                     // Animate characters of the current word
    //                     gsap.to(wordsRef.current[index].querySelectorAll('.char-wrapper'), {
    //                         y: "0%",
    //                         stagger: 0.1,
    //                         duration: 0.2
    //                     });
    //                 }
    //             });
    //         }, index * 1); // Delay the start of each word's animation
    //     });

    //     return () => {
    //         lineAnim.kill();
    //     };
    // }, [children]);

    return (
        <div className="line-wrapper">
            {line.split(' ').map((word, index) => (
                <Fragment key={index}>
                    <div style={{ display: "contents" }} ref={el => wordsRef.current[index] = el}>
                        <WordSplitter word={word} index={index} />
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
}

export default LineToCharacters;
