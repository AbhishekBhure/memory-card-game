import React from "react";
import GameDisplay from "./GameDisplay";
import arrayShuffle from "array-shuffle";
const gameContainer = () => {
  const types = ["❤", "♋", "🕉", "💥", "👦", "🤩", "🌮", "🛺"];

  const getGameData = () => {
    //get types and load the types in an new array x2(as an object)
    const gameData = [];

    const typesForGameData = [...types, ...types];

    //shuffle  the object
    let shuffledTypes = arrayShuffle(typesForGameData);

    shuffledTypes.forEach((type, index) => {
      gameData.push({
        type,
        id: index,
        open: false,
        remove: false,
      });
    });

    //return the array with the 16 cards
    console.log(gameData);
  };

  getGameData();
  return <GameDisplay />;
};

export default gameContainer;
