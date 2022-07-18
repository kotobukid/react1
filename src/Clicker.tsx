import {useState} from "react";
import "./Clicker.css";

const Clicker = (props: {num: number, setNumber: (v: number) => void}) => {
    const [num, setNum] = useState(props.num);
    return (
        <div className="clicker">
            <button onClick={() => {
                // setNum(num + 1)
                props.setNumber(num + 1);
            }}>Click!
                <span className="num">{num}</span>
            </button>
            <button onClick={() => {
                // setNum(0)
                props.setNumber(0);
            }}>Reset!</button>
        </div>
    )
}

export {Clicker}
