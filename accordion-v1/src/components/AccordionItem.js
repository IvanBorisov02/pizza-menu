export default function AccordionItem({
  num,
  title,
  text,
  curClicked,
  setCurClicked,
}) {
  const isOpen = num === curClicked;

  function handleCurClicked() {
    if (isOpen) {
      setCurClicked(null);
    } else {
      setCurClicked(num);
    }
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleCurClicked}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
