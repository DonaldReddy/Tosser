import React, { useEffect } from 'react'

function Button({ result, setResult }) {

    function handleToss(e) {
        const toss = Math.floor(Math.random() * 2)
        setResult(toss)
    }

    return (
        <div>
            <button onClick={handleToss} >TOSS</button>
        </div>
    )
}

export default Button