import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterActions.increment());
  };
  const decrease = () => {
    dispatch(counterActions.decrement());
  };
  const addby = () => {
    dispatch(counterActions.addby(2));
  };
  return (
    <>
      <h2>Counter App</h2>
      <button onClick={decrease}>Decrease</button>
      {counter}
      <button onClick={increase}>Increase</button>
      <button onClick={addby}>Add by 2</button>
    </>
  );
}

export default Counter;
