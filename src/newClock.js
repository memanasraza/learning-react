import React from 'react';


function Clock(props){
    const clickHandler = console.log;
    return (
        <button onClick={clickHandler}>
Make event
        </button>
    )
}


export default Clock;