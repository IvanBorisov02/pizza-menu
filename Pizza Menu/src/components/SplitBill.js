import { useState } from "react";

export default function SplitBill({ isSelected, setIsSelected }) {
  const [bill, setBill] = useState("");
  const [friendExpence, setFriendExpence] = useState("");
  const [payingCustomer, setPayingCustomer] = useState("You");

  function handleClick() {
    if (payingCustomer === "You") {
      isSelected.balance = isSelected.balance - (bill - friendExpence);
    } else {
      isSelected.balance = isSelected.balance + friendExpence;
    }

    setIsSelected(null);
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleClick}>
        <h2>Split a bill with {isSelected.name}</h2>

        <label>💸Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>

        <label>🫵Your expence</label>
        <input
          type="text"
          value={friendExpence}
          onChange={(e) =>
            e.target.value <= bill
              ? setFriendExpence(Number(e.target.value))
              : e.target.value
          }
        ></input>

        <label>🧑‍🤝‍🧑{isSelected.name}'s expence</label>
        <input type="text" disabled value={bill - friendExpence}></input>

        <label>😱Who's paying the bill?</label>
        <select
          value={payingCustomer}
          onChange={(e) => setPayingCustomer(e.target.value)}
        >
          <option value="You">You</option>
          <option value="Friend">{isSelected.name}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    </>
  );
}
