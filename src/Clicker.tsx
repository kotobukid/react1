import {useState} from "react";
import "./Clicker.css";

const Clicker = (props: {num: number}) => {
    const [num, setNum] = useState(props.num);
    return (
        <div className="clicker">
            <button onClick={() => {
                setNum(num + 1)
            }}>Click!
                <span className="num">{num}</span>
            </button>
            <button onClick={() => {
                setNum(0)
            }}>Reset!</button>
        </div>
    )
}

export {Clicker}
