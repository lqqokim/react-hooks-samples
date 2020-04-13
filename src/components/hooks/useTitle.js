import React, { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };

    /**
     * 1. component mount 되면 updateTitle을 수행한다. (componentDidMount)
     * 2. title update 되면 updateTitle을 다시 수행한다. (componentDidUpdate)
     */
    useEffect(updateTitle, [title]);
    return setTitle;
};

const Init = () => {
    const titleUpdater = useTitle("Loading...");
    // setTimeout(() => {
    //   titleUpdater("Home")
    // }, 5000);

    return (
        <div className="App">
            <div>
                Hi
      </div>
        </div>
    )
}

export {
    Init as useTitle
}