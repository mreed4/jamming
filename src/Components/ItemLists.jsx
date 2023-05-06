import TrackItem from "./Tracks/TrackItem";
import ArtistItem from "./Artists/ArtistItem";
import AlbumItem from "./Albums/AlbumItem";

export default function ItemLists({ items, itemTypes }) {
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
