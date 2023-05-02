import AlbumItem from "./AlbumItem";
import TrackItem from "./TrackItem";
import ArtistItem from "./ArtistItem";

export default function Items({ item, itemType }) {
  return {
    track: <TrackItem track={item} itemType={itemType} />,
    artist: <ArtistItem artist={item} itemType={itemType} />,
    album: <AlbumItem album={item} itemType={itemType} />,
  }[itemType];
}
