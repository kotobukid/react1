import React, {useState} from 'react';
import './App.css';
import {Clicker} from "./Clicker";

declare type IndexedNumber = {
    index: number,
    value: number
}

function App() {
    const [nums, setNums] = useState([] as IndexedNumber[]);
    const [index, setIndex] = useState(0);

    const all_reset = () => {
        setNums(nums.map((n: IndexedNumber) => {
            return {index: n.index, value: 0}
        }))
    }

    const setNumbers = (info: IndexedNumber) => {
        nums[info.index].value = info.value;
        setNums(nums.concat([]));
    };

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
                    {nums.map((n: IndexedNumber) => {
                        return (<Clicker key={n.index} num={n.value} index={n.index} setNumber={setNumbers}/>)
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
