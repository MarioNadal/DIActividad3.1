import React, { useState } from 'react';

function Multiplicacion({a,b}) {
    const [valorA, setValorA] = useState(a);
    const [valorB, serValorB] = useState(b);
    const [resultado, setResultado] = useState(0);

    function input1EnteredHandler(event){
        const nuevoValorA = parseInt(event.target.value);
        setValorA(nuevoValorA)
        setResultado(nuevoValorA * valorB)
    };
    function input2EnteredHandler(event){
        const nuevoValorB = parseInt(event.target.value);
        serValorB(nuevoValorB)
        setResultado(valorA * nuevoValorB)
    };

    return(
    <div><input type="number" value={valorA} onChange={input1EnteredHandler}/>
        <text>*</text>
        <input type="number" value={valorB} onChange={input2EnteredHandler}/>
        <text>=</text>
        <text>{resultado}</text>
    </div>)
};

export default Multiplicacion