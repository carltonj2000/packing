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

      <ItemsShow items={navOptions.hiking} selected={selected} />
      <ItemsShow items={navOptions.climbing} selected={selected} />
      <ItemsShow items={navOptions.canyoneering} selected={selected} />
      <ItemsShow items={navOptions.camping} selected={selected} />
      <ItemsShow items={navOptions.hotel} selected={selected} />
    </>
  );
}

export default App;
