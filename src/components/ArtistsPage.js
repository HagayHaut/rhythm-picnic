import React from "react";
import ArtistCard from "./ArtistCard.js";
import { artistList } from "../constants/artistList.js";

function ArtistsPage() {
  const artistCards = artistList.map((artist) => (
    <ArtistCard key={artist.id} artist={artist} />
  ));
  return (
    <div>
      <div className="grid grid-cols-7">{artistCards}</div>
    </div>
  );
}

export default ArtistsPage;
