export default function Item({
  item,
  handleDeleteItem,
  handleUpdateItemPacked,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => handleUpdateItemPacked(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
