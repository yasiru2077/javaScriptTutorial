import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'double':
            return { count: state.count * 2 }
        case 'reset':
            return { count: 0 }
        default:
            return state;
    }
};

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count:{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "double" })}>*</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    )
}

export default UseReducer