import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();

  function handleStepMinus() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

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

  return (
    <div className="container">
      <>
        <button onClick={handleStepMinus}>&minus;</button>
        <p className="inline">Step: {step}</p>
        <button onClick={handleStepPlus}>+</button>
        <br></br>
      </>
      <>
        <button onClick={handleCountMinus}>&minus;</button>
        <p className="inline">Count: {count}</p>
        <button onClick={handleCountPlus}>+</button>
      </>
      <>
        {count === 0 && step === 1 ? (
          <p>Today is {date.toDateString()}</p>
        ) : (
          <p>
            {count} days from today is {getFutureDate(date)}
          </p>
        )}
      </>
    </div>
  );
}

export default Counter;
