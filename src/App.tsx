import React, { useState } from 'react';
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
    </div>
  );
}

export default App;
