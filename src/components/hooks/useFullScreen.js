import React, { useState, useEffect, useRef } from 'react';

// 특정 element를 얻었을때 fullscreen으로 만드는 hooks
const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if (callback && typeof callback === 'function') {
                callback(true);
            }
        }
    }

    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === 'function') {
            callback(false);
        }
    }

    return { element, triggerFull, exitFull };
};

const Init = () => {
    const onFullScreen = (isFull) => {
        console.log(isFull ? 'We are full' : 'We are small')
    };
    
    const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

    return (
        <div className="App" style={{ height: '1000vh' }}>
            <div ref={element}>
                <img src="data:image/png;base64,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" alt="image_" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
}

export {
    Init as useFullScreen
}