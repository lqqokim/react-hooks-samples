import React, { useState } from 'react';

const content = [
    {
        tab: 'Section 1',
        content: 'Section 1 tab area'
    }, {
        tab: 'Section 2',
        content: 'Section 2 tab area'
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return null;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

const Init = () => {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} key={index}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}

export {
    Init as useTabs
}