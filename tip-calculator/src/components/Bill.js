export default function Bill({ billAmount, setBillAmount }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      ></input>
    </div>
  );
}
