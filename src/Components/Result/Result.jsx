import React from 'react'

function Result({ result, setResult }) {
    return (
        <div>
            {(result == 0 ? <img src='/head.png' /> : <img src='/tails.png' />)}
        </div>
    )
}

export default Result