import "./Clicker.css";

const Clicker = (props: {num: number, index: number, setNumber: (info: {value: number, index: number}) => void}) => {
    return (
        <div className="clicker">
            <button onClick={() => {
                props.setNumber({value: props.num + 1, index: props.index});
            }}>Click!
                <span className="num">{props.num}</span>
            </button>
            <button onClick={() => {
                props.setNumber({value: 0, index: props.index});
            }}>Reset!</button>
        </div>
    )
}

export {Clicker}
