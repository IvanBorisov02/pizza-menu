export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your list. 🚀</em>
      </footer>
    );

  const countItems = items.length;
  const countPackedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((countPackedItems / countItems) * 100);

  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          👜 You have {countItems} items on your list, and you have already
          packed {countPackedItems} ({percent}%)
        </em>
      )}
    </footer>
  );
}
