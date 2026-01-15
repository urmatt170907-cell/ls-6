import React, { useRef, useState } from "react";
const Counter = () => {
    const countRef = useRef(10);

    const [, forceUpdate] = useState(0);

    const increment = () => {
        countRef.current += 1;
        // console.log(countRef.current);
        forceUpdate(n => n + 1);
    };

    const decrement = () => {
        countRef.current -= 1;
        // console.log(countRef.current);
        forceUpdate(n => n + 1);
    };

    return (
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button onClick={decrement}>-</button>
            <p>{countRef.current}</p>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
