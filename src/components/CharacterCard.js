import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function CharacterCard({ character }) {
  return (
    <div className="card">
      {/* Status Badge */}
      <div className={`status-badge ${character.status.toLowerCase()}`}>
        {character.status === "Alive" ? "Active" : character.status}
      </div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Location: {character.location?.name}
      </p>
    </div>
  );
}

export default CharacterCard;
