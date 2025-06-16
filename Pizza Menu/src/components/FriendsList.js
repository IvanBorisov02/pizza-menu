import Friend from "./Friend";

export default function FriendsList({ friends, isSelected, setIsSelected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          key={friend.id}
        />
      ))}
      <p></p>
    </ul>
  );
}
