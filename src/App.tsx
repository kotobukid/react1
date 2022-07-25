import React, {useState, useEffect} from 'react';
import './App.css';
import {Clicker} from "./Clicker";

declare type IndexedNumber = {
    index: number,
    value: number
}

function App() {
    const [nums, setNums] = useState([] as IndexedNumber[])
    const [total, setTotal] = useState(0)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        document.title = `total: ${total} / Counters Index: ${index}`
    })

    const all_reset = () => {
        setNums(nums.map((n: IndexedNumber) => {
            return {index: n.index, 'value': 0}
        }))
        setTotal(0)
    }

    const setNumbers = (info: IndexedNumber) => {
        nums[info.index].value = info.value;
        setNums(nums.concat([]))
        setTotal(nums.reduce((a, b) => {return a + b.value}, 0))
    }

    const wipe = () => {
        setNums([])
        setIndex(0)
        setTotal(0)
    }

    return (
        <div className="App">
            <header className="App-header">
                hello world
            </header>
            <div className="App-body">
                <button onClick={() => {
                    setIndex(index + 1)
                    setNums([...nums, {index, value: 0}])
                }}> plus
                </button>
                <button onClick={all_reset}>Reset All</button>
                <button onClick={wipe}>Wipe All</button>
                <br/>
                <div className="buttons">
                    {nums.map((n: IndexedNumber) => {
                        return (<Clicker key={n.index} num={n.value} index={n.index} setNumber={setNumbers}/>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
