import { useState } from 'react';

export default function CounterApp(props: { initialValue: number }) {
    const { initialValue } = props;
    const [count, setCount] = useState(initialValue);

    const onIncrement = () => {
        setCount(count + 1);
    };

    const onDecrement = () => {
        setCount(count - 1);
    };

    const onReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <p>{count}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}
