import { navOptions, NavOptionT } from "./types";

function Button({
  navOption,
  selected,
  selectedSet,
}: {
  navOption: NavOptionT;
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
  selected: { name: string };
  selectedSet: React.Dispatch<React.SetStateAction<{ name: string }>>;
}) {
  return (
    <nav>
      <h1>Packing Lists</h1>
      <div>
        <Button
          selected={selected}
          selectedSet={selectedSet}
          navOption={navOptions.hiking}
        />
        <Button
          selected={selected}
          selectedSet={selectedSet}
          navOption={navOptions.camping}
        />
        <Button
          selected={selected}
          selectedSet={selectedSet}
          navOption={navOptions.canyoneering}
        />
        <Button
          selected={selected}
          selectedSet={selectedSet}
          navOption={navOptions.hotel}
        />
      </div>
    </nav>
  );
}

export default Nav;
