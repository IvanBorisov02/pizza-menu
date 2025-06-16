export default function Friend({ friend, isSelected, setIsSelected }) {
  function handleClick() {
    if (isSelected && isSelected.id === friend.id) {
      setIsSelected(null);
      return;
    }

    setIsSelected((prev) => friend);
  }

  return (
    <li className={isSelected && friend.id === isSelected.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      <p className={friend.balance < 0 ? "red" : friend.balance > 0 && "green"}>
        {friend.balance < 0 &&
          `${friend.name} owes you $${Math.abs(friend.balance)}.`}
        {friend.balance > 0 && `You owe ${friend.name} $${friend.balance}.`}
        {friend.balance === 0 && `You and ${friend.name} are qual.`}
      </p>
      <button className="button" onClick={handleClick}>
        {isSelected && friend.id === isSelected.id ? "Hide" : "Select"}
      </button>
    </li>
  );
}
