import { navOptions, ItemsT } from "./types";

function Button({
  navOption,
  selected,
  selectedSet,
}: {
  navOption: ItemsT;
  selected: { name: string };
  selectedSet: React.Dispatch<React.SetStateAction<{ name: string }>>;
}) {
  return (
    <button
      onClick={() => selectedSet(navOption)}
      className={selected === navOption ? "nav-selected" : ""}
    >
      {navOption.name}
    </button>
  );
}

function Nav({
  selected,
  selectedSet,
}: {
  selected: ItemsT;
  selectedSet: React.Dispatch<React.SetStateAction<ItemsT>>;
}) {
  return (
    <nav>
      <h1>Packing Lists</h1>
      <div>
        {Object.keys(navOptions).map((no) => (
          <Button
            selected={selected}
            selectedSet={selectedSet}
            navOption={navOptions[no]}
          />
        ))}
        <Button
          selected={selected}
          selectedSet={selectedSet}
          navOption={navOptions.hiking}
        />
      </div>
    </nav>
  );
}

export default Nav;
