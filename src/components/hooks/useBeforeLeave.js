import React, { useEffect } from 'react';

// 브라우저에서 커서가 벗어났을때 동작하는 hooks
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
        console.log('useEffect!')
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