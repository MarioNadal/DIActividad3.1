import { useState } from 'react';
import './App.css';
import Suma from './Suma.js';
import Resta from './Resta.js';
import Multiplicacion from './Multiplicacion';
import Division from './Division';

function App() {
  const[a] = useState(0);
  const[b] = useState(0);


  return (
    <div>
      <Suma a={a} b={b} />
      <Resta a={a} b={b} />
      <Multiplicacion a={a} b={b} />
      <Division a={a} b={b} />
    </div>
  );
};

export default App;
