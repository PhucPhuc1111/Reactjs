import { useState } from "react";
import Form from "./Form";
import PackedList from "./PackedList";
import Stats from "./Stats";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function ClearList() {
    const confirm = window.confirm("Are you sure to delete all items");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={handleAddItem} />
      <PackedList
        items={items}
        onDeleteItem={handleDelteItem}
        onToggleItem={handleToggleItem}
        onClearList={ClearList}
      />
      <Stats items={items} />
    </div>
  );
}
