import React, { useState } from 'react';
import './App.css'
import Count from './components/Count'
import Increment from './components/Increment'

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Count count={count} />
      <Increment count={count} setCount={setCount} />
    </div>
  );
}

export default App;
