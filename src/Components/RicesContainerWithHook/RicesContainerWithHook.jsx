import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eatRices, buyRices } from '../../redux';

const RicesContainerWithHook = () => {

    const rices = useSelector(state => state.rices)
    const dispatch = useDispatch(buyRices());




    
    return (
        <div>
            <h1>Number of rice KG : { rices.rices } </h1>
            <button onClick={() => dispatch(buyRices())}>+ Buy rices</button>
            <button onClick={() => dispatch(eatRices())}>- Eat pastas</button>
        </div>
    );
};

export default RicesContainerWithHook;