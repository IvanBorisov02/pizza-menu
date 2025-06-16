import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function getFutureDate(today) {
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + count);
    return futureDate.toDateString();
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="container">
      <>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(ff) => setStep(Number(ff.target.value))}
        ></input>
        <p className="inline">{step}</p>
        <br></br>
      </>
      <>
        <button onClick={handleCountMinus}>&minus;</button>
        <input
          type="number"
          value={count}
          onChange={(ff) => setCount(Number(ff.target.value))}
        ></input>
        <button onClick={handleCountPlus}>+</button>
      </>
      <>
        {count === 0 ? (
          <p>Today is {date.toDateString()}</p>
        ) : count < 0 ? (
          <p>
            {count} days from today was {getFutureDate(date)}
          </p>
        ) : (
          <p>
            {count} days from today is {getFutureDate(date)}
          </p>
        )}
      </>
      <>
        <button onClick={handleReset}>Reset</button>
      </>
    </div>
  );
}

export default Counter;
