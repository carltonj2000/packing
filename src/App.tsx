import { useState } from "react";
import Nav from "./nav";
import { ItemsT, navOptions } from "./types";
import Items from "./items";

function ItemsShow({ items, selected }: { items: ItemsT; selected: ItemsT }) {
  if (selected.name === items.name) return <Items items={items} />;
  return null;
}

function App() {
  const [selected, selectedSet] = useState(navOptions.hiking);
  return (
    <>
      <Nav selectedSet={selectedSet} selected={selected} />

      {Object.keys(navOptions).map((no) => (
        <ItemsShow items={navOptions[no]} selected={selected} />
      ))}
    </>
  );
}

export default App;
