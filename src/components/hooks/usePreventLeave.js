import React from 'react';

// hooks 사용하지 않았지만 도움을 주는 함수 (함수형 프로그래밍에 적합)
const usePreventLeave = () => {
    const listener = event => {
        event.preventDefault();
        event.returnValue = 'ㅁㄴㅇㅁㅇㅁㅇㄴ';
    }

    const enablePrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () => window.removeEventListener('beforeunload', listener)

    return { enablePrevent, disablePrevent };
}

const Init = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    )
}

export {
    Init as usePreventLeave
}