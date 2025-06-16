import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import SplitBill from "./SplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [isSelected, setIsSelected] = useState(null);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />

        {isOpen && (
          <AddFriend
            friends={friends}
            setFriends={setFriends}
            setIsOpen={setIsOpen}
          />
        )}

        <button className="button" onClick={handleClick}>
          {isOpen ? "Close" : "Add"}
        </button>
      </div>

      {isSelected && (
        <SplitBill isSelected={isSelected} setIsSelected={setIsSelected} />
      )}
    </div>
  );
}
