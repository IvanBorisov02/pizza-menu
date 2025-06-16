export default function Reset({
  setBillAmount,
  setLevOfSat,
  setLevOfSatSecond,
}) {
  function handleReset() {
    setBillAmount(0);
    setLevOfSat(0);
    setLevOfSatSecond(0);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <p></p>
    </div>
  );
}
