import { useEffect, useState } from "react";

// react hooks
const CounterWithHooks = () => {

    const [count, setCount] = useState(100);

    // componentDidMount
    useEffect(() => {
        // api data
        const interval = setTimeout(() => {
            setCount(count + 1);
            console.log(count, 'count');
        }, 1000);

        // componentWillUnMount
        return () => {
            clearInterval(interval);
        }
    }, [count]);

    return <div>
        <h1>Counter With React Hooks</h1>
        {count}
    </div>
}


export default CounterWithHooks;
