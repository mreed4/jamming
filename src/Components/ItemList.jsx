import Items from "./Items";
import TrackItem from "./TrackItem";
import ArtistItem from "./ArtistItem";
import AlbumItem from "./AlbumItem";

export default function ItemList({ items, itemTypes }) {
  return (
    <section id={`${itemTypes}-list`} className="item-list">
      <ol>
        {items.map((item) => {
          const track = <TrackItem track={item} itemType="track" />;
          const artist = <ArtistItem artist={item} itemType="artist" />;
          const album = <AlbumItem album={item} itemType="album" />;
          return <li key={item.uri}>{itemTypes === "tracks" ? track : itemTypes === "artists" ? artist : album}</li>;
        })}
      </ol>
    </section>
  );
}
