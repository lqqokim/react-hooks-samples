import React, { useState, useEffect, useRef } from 'react';

// 스크롤 이벤트에 따른 상태 변화 hooks
const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    const onScroll = () => {
        // console.log('Y', window.scrollY, 'x', window.scrollX);
        setState({ y: window.scrollY, x: window.scrollX });
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return state;
};

const Init = () => {
    const { y } = useScroll();

    return (
        <div className="App" style={{ height: '1000vh' }}>
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>Hi</h1>
        </div>
    );
}

export {
    Init as useScroll
}