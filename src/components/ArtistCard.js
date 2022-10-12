import React from "react";

function ArtistCard(props) {
  const { id, location, name, tracks } = props.artist;

  return (
    <div className="border hover:border-white p-1 m-1">
      <p>{name}</p>
      <p>{location}</p>
    </div>
  );
}

export default ArtistCard;
