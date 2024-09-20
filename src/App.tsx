import { useState } from "react";
import Nav from "./nav";
import { ItemsT, navOptions } from "./types";
import Items from "./items";

function ItemsShow({ items, selected }: { items: ItemsT; selected: ItemsT }) {
  if (selected.name === items.name) return <Items items={items} />;
  return null;
}

function App() {
  const [selected, selectedSet] = useState(navOptions.oneNight);
  return (
    <>
      <Nav selectedSet={selectedSet} selected={selected} />

      {Object.keys(navOptions).map((no) => {
        return (
          <div key={no} className="itemsGrp">
            {navOptions[no].heading && (
              <h1 className="h1Below">{navOptions[no].heading}</h1>
            )}
            <ItemsShow items={navOptions[no]} selected={selected} />
          </div>
        );
      })}
    </>
  );
}

export default App;
