import React, { useState, useEffect } from 'react';

const App = () => {
  const sayHello = () => console.log('hello');
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);

  // useEffect: componentDidMount, componentWillUnMount, componentDidUpdate
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
    </div>
  )
}

export default App;
