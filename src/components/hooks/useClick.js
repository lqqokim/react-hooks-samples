import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
    const ref = useRef();

    /**
     * - componentDidUnMount 사용을 위해 useEffect 사용
     * - dependency []: state 변경에 따른 componentDidWillMount 수행하지 않고 componentDidMount 일때 한번만 수행하도록
     */
    useEffect(() => {
        const target = ref.current;

        // componentDidMount
        if (target) {
            console.log('componentDidMount');
            target.addEventListener('click', onClick);
        }

        // useEffect 내에서 return 되는 function 은 componentDidUnMount
        return () => {
            if (target) {
                console.log('useClick componentDidWillMount !');
                target.removeEventListener('click', onClick);
            }
        }
    }, []);

    return ref;
}

const Init = () => {
    const sayHello = () => console.log('say hello');
    const title = useClick(sayHello);

    return (
        <div>
            <div>Hi</div>
            <input ref={title} placeholder="la" />
        </div>
    )
}

export {
    Init as useClick
}