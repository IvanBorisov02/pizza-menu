import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import Bill from "./Bill";
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
  const [friendName, setFriendName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [bill, setBill] = useState("");
  const [expence, setExpence] = useState("");
  const [payingCustomer, setPayingCustomer] = useState("You");
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showBillSplitter, setShowBillSplitter] = useState(null);

  function handleSplit(e) {
    e.preventDefault();
    const a = 5;
    // clearBill();
    if (payingCustomer === "You") {
      setFriends(
        friends.map((friend) =>
          friend.name === friendName
            ? { ...friend, balance: expence - bill }
            : friend
        )
      );
    } else {
      setFriends(
        friends.map((friend) =>
          friend.name === friendName ? { ...friend, balance: expence } : friend
        )
      );
    }

    clearBill();
  }

  function clearBill() {
    setBill("");
    setExpence("");
    setFriendName("");
    setPayingCustomer("You");
    setShowBillSplitter(false);
  }

  function handleAddFriend() {
    setShowAddFriend((show) => !showAddFriend);
  }

  function handleSubmitFriend(e) {
    e.preventDefault();
    const newFriend = {
      id: 342321,
      name: friendName,
      image: imageURL,
      balance: 0,
    };
    setFriends((friends) => [...friends, newFriend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          setFriendName={setFriendName}
          bill={bill}
          expence={expence}
          showBillSplitter={showBillSplitter}
          setShowBillSplitter={setShowBillSplitter}
        />
        {showAddFriend && (
          <AddFriend
            friendName={friendName}
            setFriendName={setFriendName}
            imageURL={imageURL}
            setImageURL={setImageURL}
            handleSubmitFriend={handleSubmitFriend}
          />
        )}
        <button className="button" onClick={handleAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </button>
      </div>
      {showBillSplitter && (
        <Bill
          friendName={friendName}
          bill={bill}
          setBill={setBill}
          expence={expence}
          setExpence={setExpence}
          payingCustomer={payingCustomer}
          setPayingCustomer={setPayingCustomer}
          handleSplit={handleSplit}
        />
      )}
    </div>
  );
}
