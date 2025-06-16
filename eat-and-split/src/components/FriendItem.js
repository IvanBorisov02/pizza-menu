export default function FriendItem({
  friend,
  setFriendName,
  showBillSplitter,
  setShowBillSplitter,
}) {
  function handleClick(e) {
    setFriendName(friend.name);
    if (friend.id !== showBillSplitter && showBillSplitter) {
      setShowBillSplitter(friend.id);
      return;
    }
    if (!showBillSplitter) {
      setShowBillSplitter(friend.id);
    } else {
      setShowBillSplitter(null);
    }
  }

  const isThisTheFriend = friend.id === showBillSplitter;

  return (
    <>
      <img src={friend.image} alt="Me"></img>
      <h3>{friend.name}</h3>
      <p>
        {friend.balance === 0
          ? `You and ${friend.name} are eual.`
          : `${
              friend.balance < 0
                ? `${friend.name} owes you $${Math.abs(friend.balance)}`
                : `You owe ${friend.name} $${friend.balance}`
            }`}
      </p>
      <button className="button" onClick={(e) => handleClick(e)}>
        {isThisTheFriend ? "Close" : "Select"}
      </button>
    </>
  );
}
