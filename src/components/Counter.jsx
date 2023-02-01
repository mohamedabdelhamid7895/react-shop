import React, { useContext } from 'react';
import { CounterContext } from './counterContext';

const  Counter=()=> {
    const { count,setCount } = useContext(CounterContext);

        return (
            <div className='bg-dark text-light'>
                <h1>CAN YOU COUNT?<br></br>{count}</h1>
                <button className='bg-success text-light mx-2 w-25 ' style={{height:'40px'}} onClick={() => setCount(count + 1)}>Increment</button>
                <button className='bg-danger text-light mx-2 w-25 mb-3 ' style={{ height: '40px' }} onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        );
    }


export default Counter;
