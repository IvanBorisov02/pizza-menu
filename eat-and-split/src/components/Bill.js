export default function Bill({
  friendName,
  bill,
  setBill,
  expence,
  setExpence,
  payingCustomer,
  setPayingCustomer,
  handleSplit,
}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friendName} </h2>
      <label>💸Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <label>🫵Your expence</label>
      <input
        type="text"
        value={expence}
        onChange={(e) => setExpence(Number(e.target.value))}
      ></input>
      <label>🧑‍🤝‍🧑{friendName}'s expence</label>
      <input type="text" value={bill - expence} readOnly></input>
      <label>😱Who's paying the bill?</label>
      <select
        value={payingCustomer}
        onChange={(e) => setPayingCustomer(e.target.value)}
      >
        <option value="You">You</option>
        <option value={friendName}>{friendName}</option>
      </select>
      <button className="button" onClick={(e) => handleSplit(e)}>
        Split bill
      </button>
    </form>
  );
}
