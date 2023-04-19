import Item from "./Item";

export default function ItemList({ items, itemType }) {
  return (
    <article id={`${itemType}-list`}>
      <h3>{itemType}</h3>
      <hr />
      <ol>
        {items.map((item) => {
          // console.log(item);
          const track = <Item item={item} itemType="track" />;
          const artist = <Item item={item} itemType="artist" />;
          const album = <Item item={item} itemType="album" />;
          return <li key={item.uri}>{itemType === "tracks" ? track : itemType === "artists" ? artist : album}</li>;
        })}
      </ol>
    </article>
  );
}
