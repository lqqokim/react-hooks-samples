import React, { useState, useEffect } from 'react';

// network 상태 변경에 대한 hooks
const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine);
        }

        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);

        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);

    return status;
};

const Init = () => {
    const handleNetworkChange = online => {
        console.log(online ? 'We just went online' : 'We are offline');
    };

    const onLine = useNetwork(handleNetworkChange);
    return (
        <div className="App">
            <h1>{onLine ? 'Online' : 'OffLine'}</h1>
        </div>
    );
}

export {
    Init as useNetwork
}