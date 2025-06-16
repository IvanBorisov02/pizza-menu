import Bill from "./Bill";
import FirstOpinion from "./FirstOpinion";
import Reset from "./Reset";
import Total from "./Total";
import { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [levOfSat, setLevOfSat] = useState("0");
  const [levOfSatSecond, setLevOfSatSecond] = useState("0");

  return (
    <div className="App">
      <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
      <FirstOpinion levOfSat={levOfSat} setLevOfSat={setLevOfSat}>
        <span>How did you like the service?</span>
      </FirstOpinion>
      <FirstOpinion levOfSat={levOfSatSecond} setLevOfSat={setLevOfSatSecond}>
        <span>How did your friend like the service?</span>
      </FirstOpinion>
      <Total
        billAmount={billAmount}
        levOfSat={levOfSat}
        levOfSatSecond={levOfSatSecond}
      />
      <Reset
        setBillAmount={setBillAmount}
        setLevOfSat={setLevOfSat}
        setLevOfSatSecond={setLevOfSatSecond}
      />
    </div>
  );
}
