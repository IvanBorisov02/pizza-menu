export default function FirstOpinion({ levOfSat, setLevOfSat, children }) {
  return (
    <div>
      {children}
      <select
        onChange={(e) => setLevOfSat(Number(e.target.value))}
        value={levOfSat}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
