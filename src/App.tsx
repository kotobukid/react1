import React, {useState} from 'react';
import './App.css';
import {Clicker} from "./Clicker";

function App() {
    const [nums, setNums] = useState([] as number[]);
    const all_reset = () => {
        debugger;
        setNums(nums.map(() => {return 0}))
    }

    return (
        <div className="App">
            <header className="App-header">
                hello world
                <button onClick={() => {
                    setNums([...nums, 0])
                }}> plus
                </button>
                <button onClick={all_reset}>All reset</button>
                <br/>
                <div className="buttons">
                    {nums.map((n: number) => {
                        return (<Clicker num={n}/>)
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
