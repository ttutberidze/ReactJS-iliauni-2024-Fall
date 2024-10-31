import { useDispatch } from "react-redux";
import { updateCounterAction } from "../../store/actions/counter.action";

const Controls = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(updateCounterAction(1))}>+1</button>
            <button onClick={() => dispatch(updateCounterAction(5))}>+5</button>
            <button onClick={() => dispatch(updateCounterAction(-1))}>-1</button>
            <button onClick={() => dispatch(updateCounterAction(-5))}>-5</button>
        </div>
    )
}

export default Controls;