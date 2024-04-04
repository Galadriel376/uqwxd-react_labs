import React from 'react'
import { useDispatch} from 'react-redux';
import increment from '../actions'

const MyButton = ()=>{
    let dispatch = useDispatch();
    return (
        <button onClick={()=>dispatch(increment(10))}>Incrementar contador</button>
    );
}

export default MyButton;
