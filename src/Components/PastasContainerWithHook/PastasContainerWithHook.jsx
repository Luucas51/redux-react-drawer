import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyPastas, eatPastas } from '../../redux';

const PastasContainerWithHook = () => {

    const pastas = useSelector(state => state.pastas)
    const dispatch = useDispatch(buyPastas());




    
    return (
        <div>
            <h1>Number of pastas KG : { pastas.pastas } </h1>
            <button onClick={() => dispatch(buyPastas())}>+ Buy pastas</button>
            <button onClick={() => dispatch(eatPastas())}>- Eat pastas</button>
        </div>
    );
};

export default PastasContainerWithHook;