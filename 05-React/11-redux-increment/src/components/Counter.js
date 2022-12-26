import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterAction } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch()


  const counter = useSelector(state=>state.counter.counter)
  const showCounter = useSelector(state=>state.counter.showCounter)


  const incrementHandler =()=>{
    // dispatch({type : 'increment'})
    dispatch(counterAction.increment())
  }

  const decrementHandler =()=>{
    // dispatch({type : 'decrement'})
    dispatch(counterAction.decrement())
  }

  const increaseHandler=()=>{
    // dispatch({type : 'increase' , amount :5})
    dispatch(counterAction.increase(5))
  }

  const toggleCounterHandler = () => {
    //  dispatch({type : 'toggle'})
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment By 5</button>
      <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
