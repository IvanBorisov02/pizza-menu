import { useState } from "react";

export default function AddFriend({ friends, setFriends, setIsOpen }) {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("");

  function handleClick(e) {
    e.preventDefault();

    const newFriend = {
      id: 1010,
      name: friendName,
      image: image,
      balance: 0,
    };

    setFriends((prev) => [...prev, newFriend]);
    setIsOpen(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleClick}>
      <span>🧑‍🤝‍🧑Friend name</span>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      ></input>

      <span>🌆Image URL</span>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>

      <button className="button">Add</button>
    </form>
  );
}
