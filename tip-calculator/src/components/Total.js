export default function Total({ billAmount, levOfSat, levOfSatSecond }) {
  const tipNumber = levOfSat + levOfSatSecond;
  const percentOfTip = Math.round(tipNumber / 2);
  const tip = billAmount * percentOfTip;
  const result = Math.round(tip / 100);

  return (
    <div>
      <p>
        You pay {billAmount + result} ({billAmount} + {result}$ tip)
      </p>
      <p></p>
    </div>
  );
}
