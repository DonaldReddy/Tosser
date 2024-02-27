import React from 'react'
import Button from '../Button/Button.jsx'
import Result from '../Result/Result.jsx'
import { useState } from 'react'
import Styles from './Home.module.css'

function Home() {

    const [result, setResult] = useState(0)

    return (
        <div className={Styles['main']}>
            Home
            <Result result={result} setResult={setResult} />

            <Button result={result} setResult={setResult} />

        </div>
    )
}

export default Home