import Items from "./Items";

export default function ItemList({ items, itemTypes }) {
  return (
    <section id={`${itemTypes}-list`} className="item-list">
      <ol>
        {items.map((item) => {
          const track = <Items item={item} itemType="track" />;
          const artist = <Items item={item} itemType="artist" />;
          const album = <Items item={item} itemType="album" />;
          return <li key={item.uri}>{itemTypes === "tracks" ? track : itemTypes === "artists" ? artist : album}</li>;
        })}
      </ol>
    </section>
  );
}
