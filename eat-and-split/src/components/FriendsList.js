import FriendItem from "./FriendItem";

export default function FriendsList({
  friends,
  setFriendName,
  bill,
  expence,
  showBillSplitter,
  setShowBillSplitter,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendItem
            friend={friend}
            setFriendName={setFriendName}
            bill={bill}
            expence={expence}
            showBillSplitter={showBillSplitter}
            setShowBillSplitter={setShowBillSplitter}
          />
        </li>
      ))}
    </ul>
  );
}
