import { ItemsT } from "./types";

function ShowItems({ items }: { items: Array<ItemsT> | undefined }) {
  if (items)
    return (
      <ul>
        {items.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    );
}
function Items({ items }: { items: ItemsT }) {
  return (
    <div className="mt-4">
      {!items.items && <h1>{items.name}</h1>}
      <ShowItems items={items.items} />
    </div>
  );
}

export default Items;
