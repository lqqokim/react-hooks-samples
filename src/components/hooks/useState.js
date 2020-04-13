import React, { useState } from 'react';

// const Init = () => {
//     const [item, setItem] = useState(1);
//     const incrementItem = () => setItem(item + 1);
//     const decrementItem = () => setItem(item - 1);

//     return (
//         <div>
//             <h1>Hello</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <button onClick={incrementItem}>Increment</button>
//             <button onClick={decrementItem}>Decrement</button>
//         </div>
//     )
// };

class Init extends React.Component {
    state = {
        item: 1
    };

    render() {
        const { item } = this.state;

        return (
            <div>
                <h1>Hello {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        )
    }

    incrementItem = () => {
        this.setState(state => {
            return {
                item: state.item + 1
            }
        })
    };

    decrementItem = () => {
        this.setState(state => {
            return {
                item: state.item - 1
            }
        })
    };
}

export {
    Init as useState
}