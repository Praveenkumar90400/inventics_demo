import { useState } from "react";

// initialName prop: The initial name of the player.
// symbol prop: The symbol representing the player (X or O).
// isActive prop: Boolean indicating if the player is currently active.
// onChangeName prop: Function to handle changing the player's name.

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {

// State variables

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

// Event Handlers

  function handleEditClick() {
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    // console.log(event.target.value);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
