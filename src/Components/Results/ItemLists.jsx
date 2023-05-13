import TrackListItem from "../Tracks/TrackListItem";
import ArtistListItem from "../Artists/ArtistListItem";
import AlbumListItem from "../Albums/AlbumListItem";

export default function ItemLists({ items, itemTypes }) {
  return (
    <ol id={`${itemTypes}-list`} className="item-list">
      {items.map((item) => {
        const track = <TrackListItem track={item} itemType="track" />;
        const artist = <ArtistListItem artist={item} itemType="artist" />;
        const album = <AlbumListItem album={item} itemType="album" />;
        return <li key={item.uri}>{itemTypes === "tracks" ? track : itemTypes === "artists" ? artist : album}</li>;
      })}
    </ol>
  );
}
