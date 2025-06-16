export default function AddFriend({
  friendName,
  imageURL,
  handleSubmitFriend,
  setFriendName,
  setImageURL,
}) {
  return (
    <form className="form-add-friend">
      <span>🧑‍🤝‍🧑Friend name</span>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      ></input>
      <span>🌆Image URL</span>
      <input
        type="text"
        onChange={(e) => setImageURL(e.target.value)}
        value={imageURL}
      ></input>
      <button className="button" onClick={(e) => handleSubmitFriend(e)}>
        Add
      </button>
    </form>
  );
}
