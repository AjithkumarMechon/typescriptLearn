import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count > 0 ?(state.count - 1): 0 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
  
export default function ReducerHook() {   
    const [state, dispatch]=useReducer(reducer, {count:0})
  return (
    <div>
        {state.count}
        <button onClick={()=>dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>      
        <button onClick={()=>dispatch({type: "RESET"})}>RESET</button>
    </div>
  )
}
