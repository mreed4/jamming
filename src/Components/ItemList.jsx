import Item from "./Item";
import Helpers from "../util/Helpers";

export default function ItemList({ items, itemTypes }) {
  // console.log(items);
  return (
    <section id={`${itemTypes}-list`} className="item-list">
      <ol>
        {items.map((item) => {
          // console.log(item);
          const track = <Item item={item} itemType="track" />;
          const artist = <Item item={item} itemType="artist" />;
          const album = <Item item={item} itemType="album" />;
          return <li key={item.uri}>{itemTypes === "tracks" ? track : itemTypes === "artists" ? artist : album}</li>;
        })}
      </ol>
    </section>
  );
}
