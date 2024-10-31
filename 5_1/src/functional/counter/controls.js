import { useDispatch } from "react-redux";
import { update } from "../../store/slices/counter.slice";

const Controls = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(update(1))}>+1</button>
            <button onClick={() => dispatch(update(5))}>+5</button>
            <button onClick={() => dispatch(update(-1))}>-1</button>
            <button onClick={() => dispatch(update(-5))}>-5</button>
        </div>
    )
}

export default Controls;