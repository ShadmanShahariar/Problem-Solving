import React, { useState } from "react";
import "./App.css";

const AlphabetTileInteraction = () => {
  const [outputString, setOutputString] = useState("");

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    const regex = /(.)\1{2,}/g;
    newOutputString = newOutputString.replace(regex, (match) =>
      "_".repeat(match.length)
    );

    setOutputString(newOutputString);
  };

  const renderTiles = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return alphabet.map((letter) => (
      <button key={letter} onClick={() => handleTileClick(letter)}>
        {letter}
      </button>
    ));
  };

  return (
    <div className="App">
      <div className="tiles-container">{renderTiles()}</div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default AlphabetTileInteraction;
