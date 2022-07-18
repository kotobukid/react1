import React, {useState} from 'react';
import './App.css';
import {Clicker} from "./Clicker";

function App() {
    const [nums, setNums] = useState([] as {index: number, value: number}[]);
    const [index, setIndex] = useState(0);

    const all_reset = () => {
        setNums(nums.map((n) => {return {index: n.index, value: 0}}))
    }

    return (
        <div className="App">
            <header className="App-header">
                hello world
                <button onClick={() => {
                    setIndex(index + 1)
                    setNums([...nums, {index, value: 0}])
                }}> plus
                </button>
                <button onClick={all_reset}>All reset</button>
                <br/>
                <div className="buttons">
                    {nums.map((n: {index: number, value: number}) => {
                        return (<Clicker key={n.index} num={n.value} setNumber={(v: number) => {nums[n.index].value = v; setNums(nums); }}/>)
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
