import React from 'react';
import { useInput } from './hooks/useInput';


const App = () => {
  // 입력값이 10보다 크면 값이 입력되지 않는다.
  const maxLen = value => value.length <= 10;
  // 입력값에 @가 있으면 입력되지 않는다.
  const checkAtSign = value => !value.includes('@');

  const name = useInput("Mr.", checkAtSign);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  )
}

export default App;
