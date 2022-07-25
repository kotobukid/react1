import "./Clicker.css";

const Clicker = (props: { num: number, index: number, setNumber: (info: { value: number, index: number }) => void }) => {
    const updateNum = (value: number) => {
        props.setNumber({value, index: props.index})
    }

    return (
        <div className="clicker">
            <button onClick={() => {
                updateNum(props.num + 1);
            }}>Click!
                <span className="num">{props.num}</span>
            </button>
            <button onClick={() => {
                updateNum(0);
            }}>Reset!
            </button>
        </div>
    )
}

export {Clicker}
