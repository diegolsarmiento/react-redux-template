import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <div className="App-content">Content 1</div>
    </div>
  );
}

export default App;
