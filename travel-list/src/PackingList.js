import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleUpdateItemPacked,
  handleClearList,
}) {
  const [orderBy, setOrderBy] = useState("input");

  let sortedItems;

  if (orderBy === "input") {
    sortedItems = items;
  } else if (orderBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((el) => (
          <Item
            item={el}
            key={el.id}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItemPacked={handleUpdateItemPacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
