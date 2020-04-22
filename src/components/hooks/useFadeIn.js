import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity: 0 } };
}

const Init = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(2);

    return (
        <div className="App">
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP} >lorem ipsum lalalalala</p>
        </div>
    )
}

export {
    Init as useFadeIn
}