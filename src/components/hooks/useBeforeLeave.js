import React, { useEffect } from 'react';

const useBeforeLeave = onBefore => {
    // if (typeof onBefore !== 'function') {
    //     return;
    // }

    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    }

    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mouseleave', handle)
    }, []);
}

const Init = () => {
    const begForLife = () => console.log('Pls dont leave');
    useBeforeLeave(begForLife);

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    )
}

export {
    Init as useBeforeLeave
}