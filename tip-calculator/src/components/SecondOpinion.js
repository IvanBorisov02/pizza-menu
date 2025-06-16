export default function SecondOpinion({
  levOfSatSecond,
  setLevOfSatSecond,
  children,
}) {
  return (
    <div>
      {children}
      <select
        onChange={(e) => setLevOfSatSecond(Number(e.target.value))}
        value={levOfSatSecond}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
      <p></p>
    </div>
  );
}
