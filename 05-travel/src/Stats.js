export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some item into your packing List 🚀</p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything! Ready to go ✈️"
          : `💼 You have ${numItem} items on your list, and you already packed${" "}
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
