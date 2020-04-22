import React, { useState, useEffect, useRef } from 'react';

// hooks 사용 x, functional
const useNotification = (title, options) => {
    if (!('Notification' in window)) {
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };

    return fireNotif;
};

const Init = () => {
    const triggerNotif = useNotification('Can I steal your kimchi?', {
        body: 'I love kimchi dont you'
    });

    return (
        <div className="App" style={{ height: '1000vh' }}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}

export {
    Init as useNotification
}